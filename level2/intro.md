# Level2

レベル2のコンテンツでは、Progateで学ぶことのできなかったプログラミングの基礎について、いくつか追加で学びます。

このページでは基本的にChromeのデベロッパーツールを使って文法を確認します。

## 特別なデータの型について

Progateで、数字や文字列などの基礎的なものは学びましたが、プログラミングをしていくなかで避けては通れない２つのものを理解しましょう。

一つは「リスト・配列」で、もう一つは「連想配列・オブジェクト」です。どちらにも配列という言葉が入っており少しややこしいのと、プログラミング言語や解説書によって呼び方等が異なるので調べるときに混乱するかもしれませんが体感しながら理解しましょう。

ここでは参考書の数ページに渡る内容を最低限必要なことに絞って解説しています。もっとわかりやすいものはたくさんあると思いますので調べてみてください。（Progateの無料版にはありませんでした！）

### 配列

HTMLを学んだときにリスト(li)というものを学びました。

```html
<ul>
  <li>一番目</li>
  <li>二番目</li>
  <li>三番目</li>
  <li>四番目</li>
</ul>
```

このように、順番が指定されているものがリストです。

JavaScriptでは、これを、

```javascript
["一番目", "二番目", "三番目", "四番目"]
```

と表記します。

デベロッパーツールに

```javascript
myList = ["一番目", "二番目", "三番目", "四番目"];
console.log(myList.length);
```

と入力すると、作成したリストの長さである4を表示することができます。

また、

```javascript
console.log(myList[2]);
```

とすると、「2番目の"二番目"」という文字列`ではなく`、3番目の"三番目"という文字列が出力されるはずです。

試しに `console.log(myList[0]);` や、`console.log(myList[100]);` を入れたらどうなるか確認しましょう。

#### プログラミングでの配列はどういうときに使われるの？

Excelの縦に振ってある行番号を想像してください。行の後ろに追加したり、前に追加したり、並び替えたりするのに使います。また、全ての行に対して何らかの処理をするときに利用されます。

これを、デベロッパーツールで確認してみましょう。

```javascript
// 最初は A,B,Cという3人のメンバーがいます
let members = ["A", "B", "C"];
console.log(`membersは${members}`);
// Dさんが参加します
members.push("D");
console.log(`membersは${members}`);
// Xさんが先頭に割り込みます
members.unshift("X");
console.log(`membersは${members}`);
// 並び替え
members.sort();
console.log(`membersは${members}`);
// 先頭にいる人を取り出します
let first = members.shift();
console.log(`先頭は${first}でした。membersは${members}`);
// 最後にいる人を取り出します
let last = members.pop();
console.log(`末尾は${last}でした。membersは${members}`);
// 全部で何人いるでしょうか？
console.log(`membersの人数は${members.length}です`);

また、下記のような記述がよく見られます。これは、配列の全ての値を繰り返すという意味です。

```js
for (let i = 0; i < members.length; i++) {
    console.log(members[i]);
}
```

### 連想配列

Excelで言えば、A列とか、A列のヘッダーに「名前」や「所属」というラベルがつくことがあると思います。

|行番号|名前|ポジション|
|-|----|-----|
|1|桑原将志|センター|
|2|J.ロペス|ファースト|
|3|梶谷隆幸|ライト|

このようなデータに対し、例えば行番号が3番目のデータを

```javascript
{
    "name": "梶谷隆幸",
    "position" : "ライト"
}
```

のように表記します。

改行せず単に、

```javascript
{"name": "梶谷隆幸", "position" : "ライト"}
```

とすることもあります。

このとき、

```javascript
myMap = {"name": "梶谷隆幸", "position" : "ライト"};
```

に対して、

```
console.log(myMap["name"]);
// もしくは
console.log(myMap.position);
```

のようにして、実際のデータを取り出すことができます。

配列の記法と合わせると、

```javascript
let players = [
{
    "name": "桑原将志",
    "position" : "センター"
},
{
    "name": "J.ロペス",
    "position" : "ファースト"
},
{
    "name": "梶谷隆幸",
    "position" : "ライト"
}
];
```

と表記することができるようになります。これから学習するGoogleのサービスのデータを取り出すときには、だいたいこのようなフォーマットになっていますので、よく見てみるようにしましょう。

#### 練習してみよう

- 上記の players に対して、「ファースト」を取り出すにはどうしたらいいだろうか？
- `players.push({"name": "伊藤裕季也", "position": "セカンド"});` を実行するとどうなるだろうか？
- 上記を実行した後の `players.length` はいくつか？

## 関数の呼び出しについて

みなさんは職業プログラマではないので"ざっくり"説明すると、関数の呼び出し方の形には3種類あります。

- ある変数に対して呼び出す
- あるクラスを使って呼び出す
- 単体で呼び出す（言語に組み込まれた関数または誰かが定義した関数）

記法としては下記のようになっていたら、「関数を呼び出しているんだな」と思ってください。

```javascript
// ある変数に対して呼び出す。だいたい小文字.動詞() の形をしている
let position = player.getPosision();
// あるクラスを使って呼び出す。だいたい大文字.動詞()の形をしている
var sheet = SpreadSheetApp.openById("xxxxxxxxxxxxx");
// 単体で呼び出す。だいたい動詞() の形をしている。
var result = myFunction();
``` 

変数の種類（変数が文字列なのか、配列なのか、連想配列なのか）によって呼び出すことができる関数が異なります。以下にその一例をあげます。

```javascript
// 文字列に関する関数(substring: 特定の位置からの取り出し)
let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(abc.substring(10, 20));

// 配列に関する関数(indexOf: 何番目の順番で発見されたか）
let members = ["A", "B", "C", "D"];
console.log(members.indexOf("C"));
console.log(members.indexOf("X"));
```

"JavaScript 文字列 関数"や、"JavaScript String 関数" で検索すると様々な関数とその使い方の実例が見つかります。

クラスに含まれる関数はそのクラスごとに関数が定義されています。

[Google Calendarのデータを扱うCalendarApp](https://developers.google.com/apps-script/reference/calendar/calendar-app) には40個近くの関数が存在します。やりたいことに関数が存在するかは、こういったリファレンスを見て調べることになります。


## 練習問題

デベロッパーツールを用いて、指定した配列の平均値を求めてみましょう。

```javascript
let nums = [1,2,3,4,5,10,20,30,40,50];
let answer = 0;
// まずは answer = answer + nums[0]; とすることで最初に1が足されます
// 次に answer = answer + nums[1]; とすることで answer = 1 + 3となります
// これを繰り返すと最後は answer = 115 + 50 となります
// それを nums の 個数で割ると平均が求められます numsの個数を求める方法は？？
// for (let i = 0; i < nums.length; i++ ) ... を使えば？？
```


[次のコンテンツ：カレンダーのアプリを理解してみよう](./calendar)


