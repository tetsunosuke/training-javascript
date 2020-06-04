// こちらにJavaScriptを書いてください

// 下記の内容を活用して、問題を解いてください
// 下記の記述により、secondには現在の秒数が入っています
const date = new Date();
const second = date.getSeconds();
// 12:34:56 のように表示するためには、 
// const hour = date.????, const minitues = date.???? のように書く必要があります。調べてみましょう。
// ヒントここまで 

// 一旦 秒数を表示しておきます
// console.log(`現在の秒は${second}です`);

/**
 * 現在の秒数が偶数のときは「偶数です」
 */
// 偶数＝ 2で割ったときにあまりが０のもの

/** 模範解答 **/
if (second % 2 === 0) {
    console.log("偶数です");
}

/**
 * 問題
 * 現在の秒数を二乗した値が1のときは1st, 2のときは2nd、3のときは3rd、4のときは4th のように出力（0から59まで！）
 */
// まずは秒数を二乗したものが取りうる値を調べます
// すると、1の位が2とか3になることはないとわかります！
for (let i=0; i<=60; i++) {
    //  console.log(i*i);
}
// 次に、英語で　1の位が 1になったときに1st と"言わない"のは 11(eleven) のときです。
// 2401 は two thousand four hundred first なので 1stと言います
// したがって、 二乗したときに 100で割ったあまりが 11になるものがあるかを下記のコードで調べますが
// それもないことがわかりました！
for (let i=0; i<=60; i++) {
    if (i*i % 100 === 11) {
//        console.log(i*i);
    }
}
/** 模範解答 **/
// 結果だけ見るとこのような感じになります。
// この問題のポイントは、60もの数字を全部目でチェックするのではなく、プログラムを使って一部の作業を
// コンピューターに任せた、というところです
if (second*second % 10 === 1) {
    console.log(`${second*second}st`);
} else {
    console.log(`${second*second}th`);
}

/**
 * 現在の時刻を “ただいま 12:34:56” のように表示。
 */
// "JavaScript Date getSeconds" 等で調べると https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date などのページが見つかります

// 下記のようにgetHours, getMinutesを使います
const hour = date.getHours();
const minutes = date.getMinutes();
console.log(`ただいま ${hour}:${minutes}:${second}`);
// 問題には指定していませんが、 "9分" などのときは12:09:56 のように表示できればより理想的です！
let zHour = date.getHours();
let zMinutes = date.getMinutes();
let zSecond = date.getSeconds();
if (zHour < 10) {
    zHour = "0" + zHour;
}
if (zMinutes < 10) {
    zMinutes = "0" + zMinutes;
}
if (zSecond < 10) {
    zSecond = "0" + zSecond;
}
console.log(`ただいま ${zHour}:${zMinutes}:${zSecond}`);


