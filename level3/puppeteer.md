# puppeteer でできること

初日にサンプルを実行してみたように、puppeteer のコードは、

```js
const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        // 省略
    });
    const [page] = await browser.pages();
    browser.close();
})();
```

のような形を基本としています。ここに、自分がやりたいことを順番に記載していくことで、Chromeを操作することができます。

ちなみにこれらについてどういう意味なのかを簡単にコメントを書いていくと
```js
// puppeteer を使えるようにする（ライブラリを読み込む）
const puppeteer = require('puppeteer');
(async() => {
    // ブラウザを起動する
    const browser = await puppeteer.launch({
        headless: false, // headlessモードというのがあり、これをtrueにするとブラウザが起動する画面を見せずに実行可能
        slowMo: 300      // 300ミリ秒＝0.3秒くらいの遅延をさせながら動く。これを消すとめっちゃ早くて何が起きたかわからないかも
    });
    // 開いたブラウザのタブを検知
    const [page] = await browser.pages();
    // ブラウザを閉じる
    browser.close();
})();
```

では、このプログラムを少しずつ変更してみましょう。 `test1.js` という名前でファイルを保存し、下記のように書いてみます。

```
const puppeteer = require('puppeteer');
(async() => {
    console.log("launch");
    const browser = await puppeteer.launch({
        headless: false
    });
    console.log("pages");
    const [page] = await browser.pages();

    // google.jp を開いてみる
    let url = "https://google.jp/";
    await page.goto(url);
    console.log(`open url=${url}`);

    // 現在表示しているページのURLをconsole.logに出す
    url = await page.url();
    console.log(`opned url=${url}`);

    // ブラウザを閉じる
    browser.close();
})();
```

コマンドプロンプトから 

```
> node test1.js
```

で実行します

slowMo の表記がなくなったこと、urlがgoogle.jp になったこと、console.logが増えたこと。このくらいが差になっています。`ログが大切` と以前のコンテンツで記載しましたが、それぞれの動作の中で何がどうなっているのか？を表示するとわかりやすくなります。ここでは、google.jp を開いたのに、 いつのまにか google.co.jp が開かれていたことが理解できます。（これは、`リダイレクト` という仕組みで、自動的に転送された、ということです。）

- `page.goto(url)` で そのURLに遷移する
- `page.url()` で今開いているURLを取得する

ことがわかりました。

## 試してみよう

`headless: false` という行を削除して実行してみよう。何も起動していないのに、コマンドプロンプトには先程と同じような結果が表示されるはずです。こちらは「ヘッドレスモード」という、裏側でChromeが起動して動いている、という意味になります。画面を表示するよりも高速に動作するので、より実用的です。（開発をする際には、headless: falseを使います）


このように、 page には様々な関数が用意されています。

[puppeteerのPageに関するマニュアル](https://pptr.dev/#?product=Puppeteer&version=v3.2.0&show=api-class-page) を見ると Methodsのところにたくさんの関数が記載されています。以下に、代表的に使うものを挙げます

|関数名| 使われるケース|
|------|---------------|
|$(selector) | セレクタの要素を取得します(複数ある場合は先頭のもの）|
|$$(selector)| セレクタの要素を取得します(複数ある場合はその全て）|
|click(selector)| セレクタで指定された要素をクリックします|
|content()| ページのコンテンツを取得します|
|goto(url)|urlへ遷移します|
|goForward(), goBack()| 前へ、次へ|
|screenshot()| スクリーンショットを保存します|
|type(selector, text)| テキストを入力します|
|url(), title()| URL, タイトルを取得します|


## 練習問題

(1)下記の動作を行うプログラムを作成しましょう。（リンク編）

- キタムラ・ホールディングスのコーポレートサイトを開く: page.goto("https://kitamura-group.co.jp/")
- そのタイトルを取得してconsole.logで表示:  page.title()
- プライバシーポリシー へのリンクを取得
    - class="privacy" なので: page.$(".privacy")
```
let selector = ".privacy";
let elm = await page.$(selector);
// テキストの取得はこのようにします
let text = await page.evaluate(elm => elm.textContent, elm);
```

- そのリンクをクリック: page.click()
- 再びタイトルを取得してconsole.logで表示: page.title()
- "1　個人情報の定義、適用範囲" などの条項名を取得して表示
    - "h3" を取得しますが、 複数あるので page.$$(selector) を使います。
    - 複数取得（配列） されるので for 文を使ってすべて表示します

- ブラウザの戻るを押します: page.goBack()
- 再びタイトルを取得してconsole.logで表示: page.title()

[練習問題の回答例はこちら](../src/level3.js) です。

## 演習問題

- (1) [勤労の獅子](https://kinrou.sas-cloud.jp/kinrou/kojin/) にログインして残りの有給日数を確認してみよう
- (2) [Googleフォーム](https://docs.google.com/forms/d/e/1FAIpQLSfCs2FzbezLdOUZAqu44iCJCwGedRSzcvkiHGKQamWU28a_kg/viewform)に正しい回答を送信してください。

課題(1) については、`waitForNavigation` を使わないと思いどおりに動かないかもしれません。どのように使うのか調べてみましょう。

課題(2) については、`waitForXPath` を使わないと思いどおりに動かないと思います。[PuppeteerでinnerTextを使って要素を選択する](https://qiita.com/shora_kujira16/items/34cb4074dfa715007698)を参考にしてみましょう。そのまま書いても動かないのでいろいろ調べたりしましょう。入力するべき項目は `name` で探すと良いと思います。

演習問題ができたら、作成したファイルをそれぞれ演習問題フォルダに提出してください。


[目次へ戻る](../)
