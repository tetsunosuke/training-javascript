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

ちなみにこれらについてどういう意味なのかを簡単に書いていくと
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

slowMo の表記がなくなったこと、urlがgoogle.jp になったこと、console.logが増えたこと。このくらいが差になっています。`ログが大切` と以前のコンテンツで記載しましたが、それぞれの動作の中で何がどうなっているのか？を表示するとわかりやすくなります。ここでは、google.jp を開いたのに、 いつのまにか google.co.jp が開かれていたことが理解できます。（これは、`リダイレクト` という仕組みで、自動的に転送された、ということです。）

- `page.goto(url) で そのURLに遷移する
-  page.url() で今開いているURLを取得する

ことがわかりました。

このように、 page には様々な関数が用意されています。

[puppeteerのPageに関するマニュアル](https://pptr.dev/#?product=Puppeteer&version=v3.2.0&show=api-class-page) を見ると Methodsのところにたくさんの関数が記載されています。以下に、代表的に使うものを挙げます

|関数名| 使われるケース|
|------|---------------|
|$(selector) | セレクタの要素を取得します(複数ある場合は先頭のもの）|
|$$(selector)| セレクタの要素を取得します(複数ある場合はその全て）|
|click(selector)| セレクタで指定された要素をクリックします|
|content()| ページのコンテンツを取得します|
|goto(url)|urlへ遷移します|
|goForward, goBack| 前へ、次へ|
|screenshot()| スクリーンショットを保存します|
|type(selector, text)| テキストを入力します|
|url(), title()| URL, タイトルを取得します|


