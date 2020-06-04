# 練習問題の答え

## Level2


### 練習してみよう の解答と解説

- 上記の players に対して、「ファースト」を取り出すにはどうしたらいいだろうか？
- players.push({"name": "伊藤裕季也", "position": "セカンド"}); を実行するとどうなるだろうか？
- 上記を実行した後の players.length はいくつか？

解答と解説

まず、playersが配列となっているので、それぞれに
```
players[0] = {"name":"桑原将志", "position":"センター"};
players[1] = {"name":"J.ロペス", "position":"ファースト"};
players[2] = {"name": "梶谷隆幸", "position":"ライト"};
```

のようになっていると言えます。

```
myMap = {"name":"梶谷隆幸", "position": "ライト"};
``` 

に対して、 `myMap["position"] または myMap.position で「ライト」が取り出されたように

```
players[1] = {"name":"J.ロペス", "position":"ファースト"};
```

から、「ファースト」を取り出すので、答えは

```
players[1]["position"]
// または
players[1].position
``` 

となります。

players.push({"name": "伊藤裕季也", "position": "セカンド"}); を実行すると

```
players[3] = {name: "伊藤裕季也", position: "セカンド"};
```

というデータが追加されますので、`players.length` は配列の中にあるデータの個数である「4」となります。

### 練習問題の解答と解説

```
let nums = [1,2,3,4,5,10,20,30,40,50];
let answer = 0;
// まずは answer = answer + nums[0]; とすることで最初に1が足されます
// 次に answer = answer + nums[1]; とすることで answer = 1 + 3となります
// これを繰り返すと最後は answer = 115 + 50 となります
// それを nums の 個数で割ると平均が求められます numsの個数を求める方法は？？
// for (let i = 0; i < nums.length; i++ ) ... を使えば？？
```

のように、実際には

```
let nums = [1,2,3,4,5,10,20,30,40,50];
let answer = 0;
answer = answer + nums[0]; // answer = 0 + 1;
answer = answer + nums[1]; // answer = 1 + 2;
answer = answer + nums[2]; // （説明省略）
answer = answer + nums[3]; // （説明省略）
answer = answer + nums[4]; // （説明省略）
answer = answer + nums[5]; // （説明省略）
answer = answer + nums[6]; // （説明省略）
answer = answer + nums[7]; // （説明省略）
answer = answer + nums[8]; // （説明省略）
answer = answer + nums[9]; // （説明省略）
```

とすれば計算できますが、プログラムではこれを繰り返しで書くので

```
let nums = [1,2,3,4,5,10,20,30,40,50];
let answer = 0;
for (let i=0; i < nums.length; i++) {
    answer = answer + nums[i];
}
```

によって配列の数字の和を求められるので、 numsの個数で割って

```
let nums = [1,2,3,4,5,10,20,30,40,50];
let answer = 0;
for (let i=0; i < nums.length; i++) {
    answer = answer + nums[i];
}
console.log(`numsの平均は${answer/nums.length}です`);
```

となります。

### カレンダーの練習問題

(1) リファレンスで、`Inserts a new sheet into the spreadsheet with the given name.` という説明のある insertSheet(sheetName) が使えそうです。

```
function createNewSheet() {
  // 開いているシートを取得
  const spreadSheet = SpreadsheetApp.getActive();
  // ここを埋めてみてください
  spreadSheet.insertSheet("新規で作成する名前");
}
```

(2)  console.log(associativeArray); の結果が、

```
[ [???, ???], [???, ???], [???, ???] ,...]
```

のように、配列の中に配列がある形になっています。よって、associativeArray[1][5] のように、何番目のデータが欲しいか？を調べて得ることができます。
（人によって数字が異なりますので各自試しましょう） もちろん左上のA1はassociativeArray[0][0] です。

```
function getValuesAsAssociativeArray() {
  // 開いているシートを取得
  const sheet = SpreadsheetApp.getActive().getActiveSheet();
  // 値の入っているセル範囲を取得
  const range = sheet.getDataRange();
  // 値を連想配列としてログに出力してみましょう
  let associativeArray = range.getValues();
  console.log(associativeArray);
  // 配列として取得した値から、好きな値を取り出してみましょう
  console.log(associativeArray[1][5]);
}
```






