# Level 1

このレベルでは、受講に必要なソフトウェアのインストールやアカウントの登録をしましょう。

ここからの説明は「懇切丁寧に」はつくられていません。調べる力をつけましょう。途中英語の記事なども出てくるかもしれません。翻訳サイトなどを使って取り組みましょう！

## 学習環境の整備

### Progateのアカウント登録

プログラミング言語や、それに関連する周辺知識としてHTML/CSS の学習を行ってもらいます。

今回序盤では [progate](https://prog-8.com/) のコースを受講するので、アカウントを作成してください。 こちらのアカウント名は特に研修事務局では管理しないので、お好きな方法（Facebookで登録など）で登録してOKです。

### Visual Studio Code のインストール

プログラミング言語はメモ帳などのテキストで書いても動作しますが、プログラミング言語は少しでも間違えると動かなくなります。

例えば大事な概念として文字列というものがありますが、"文字列" のようにダブルクオーテーションでくくるなどの特徴があります。これを間違って、 "文字列' のように対応関係を間違えると途端に動きません。このようなエラーが起きてもすぐにわかるよう、色分けをしてくれる便利なテキストエディタを使いましょう。

[Visual Studio Codeのダウンロードページ](https://code.visualstudio.com/) からダウンロードして、インストールしてください。

その他にも Sublime Text や、Atom、サクラエディタ、秀丸 などのテキストエディタがありますのでお好みで選んでみても良いです。

Visual Studio Codeが英語で困るって？ - "Visual Studio Code 日本語化" などで調べてなんとかしましょう。

### Node.js のインストール

Node.js は プログラミング言語の一つである JavaScript に関する環境です。詳細は別途説明しますが、プログラムを実行する環境として今回利用します。

※JavaScript の実行環境は今回その他にも２つ利用しますが、その他はChromeがあればOKです。

[Node.jsのダウンロードページ](https://nodejs.org/ja/download/) からダウンロードしてインストールしてください。

###  作業フォルダの作成

今回の研修で利用するプログラムは全て、特定のフォルダで行うことを前提としています。

Windowsの方は `C:¥` に `training-javascript` というフォルダを作り、そこで作業することにしましょう。
Macの方は、`ホーム` に `training-javascript` というフォルダを作り、そこで作業することにしましょう。

コマンドプロンプト／ターミナルで作業する際には

```
(Windowsの人は)
> cd C:¥training-javascript

(Macの人は)
$ cd ~/training-javascript
```

と実行するとそのフォルダに移動することができます。

### コマンドプロンプト／ターミナル の使い方を理解する

プログラムを実行するときは、いわゆる「黒い画面」を利用することがあります。

Windowsの方: [今さら聞けない！コマンドプロンプトの使い方【初心者向け】](https://techacademy.jp/magazine/5318) 

Macの方(標準では白い画面です）: [今さら聞けない！ターミナルの使い方【初心者向け】](https://techacademy.jp/magazine/5155)

などの記事がありますのでざっと目を通しておくと良いでしょう。

上の作業で、Node.jsのインストールが完了しているはずなので、

```
> node -v
```

と実行すると（以下、この説明では `>` は入力不要です。また、"実行する"ときは Enter を押します）

```
v12.3.0
```

のように何かしらの結果が出力されるはずです。違うものが出た場合は何かがおかしいので質問してください。

### puppeteer のインストール

上記がうまくいった場合、後ほど利用するために

```
> npm i puppeteer
```

と実行してください。それなりに時間がかかって例えば下記のような内容が表示されます。

```
> puppeteer@3.2.0 install /Users/tetsunosuke.ito/node_modules/puppeteer
> node install.js

Downloading Chromium r756035 - 124.1 Mb [====================] 100% 0.0s
Chromium (756035) downloaded to /Users/tetsunosuke.ito/node_modules/puppeteer/.local-chromium/mac-756035
npm WARN saveError ENOENT: no such file or directory, open '/Users/tetsunosuke.ito/package.json'
npm WARN enoent ENOENT: no such file or directory, open '/Users/tetsunosuke.ito/package.json'
npm WARN firebase-functions@3.1.0 requires a peer of firebase-admin@^8.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.3.0 requires a peer of bufferutil@^4.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN ws@7.3.0 requires a peer of utf-8-validate@^5.0.2 but none is installed. You must install peer dependencies yourself.
npm WARN tetsunosuke.ito No description
npm WARN tetsunosuke.ito No repository field.
npm WARN tetsunosuke.ito No README data
npm WARN tetsunosuke.ito No license field.

+ puppeteer@3.2.0
added 22 packages from 14 contributors, updated 3 packages and audited 1561 packages in 109.003s
found 1360 vulnerabilities (958 low, 13 moderate, 376 high, 13 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

```


下記のように、また何か入力できるようになっていれば多分正常なので次へ進みましょう。
（もしうまくいっていない場合、次のコンテンツでうまくいかないことがわかるので、その際に質問してください）
```
>
```



それではいよいよ、このカリキュラムを学び終わった後、どのようなことができるようになるか？そのゴールを確認しましょう。

[次のコンテンツ：ゴールを確認しよう](./goal)
 
