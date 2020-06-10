// 設定内容は下記のように別ファイルにしておくとパスワードとかを漏らさなくて良いので便利です
const {kinrouConfig} = require('./kinrouconfig.js')

const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        // headless にするかどうかは決めて良いです
        // headless: false,
    });
    // よく使うものは先に宣言しておくといいかも
    let text;

    const [page] = await browser.pages();
    // トップページ
    await page.goto(kinrouConfig.url);

    // ログイン。法人コード、社員コード、パスワードを入力し、ログインボタンを押します
    await page.type('[name=houjinCode]', kinrouConfig.houjinCode);
    await page.type('[name=userId]', kinrouConfig.userId);
    await page.type('[name=password]', kinrouConfig.password);
    // ここは説明していませんが、次のページが読み込まれるまで待つという意味です
    await Promise.all([
        page.waitForNavigation(),
        page.click("#bt")
    ]);

    // メニューへ遷移するため、#back_menuを押します
    await Promise.all([
        page.waitForNavigation(),
        page.click("#back_menu")
    ]);

    // 解答例1: こちらが想定していた内容です
    // 有休照会、ではなく、個人照会から見ます
    await Promise.all([
        page.waitForNavigation(),
        page.click(".menuBtn")
    ]);

    // 上の表の中からtdの6番目を拾ってきます
    let elms = await page.$$("#getuji_scroll td");
    text = await page.evaluate(elm => elm.textContent, elms[5]);
    console.log(`有給の残りは${text}日です`);

    // 解答例2: 有休照会メニューから見ます
    /*
    await Promise.all([
        page.waitForNavigation(),
        page.click("#kinou_200012")
    ]);

    let xpath;
    let elms;
    // 足し算する必要があるので初期値を数字で0にします
    let days = 0;
    // for(let i=0; ....) のように回しても良いですが、1,2 だけを使うのでofを使います
    // ※ ただしこの方法では来年困ります...
    for (i of [1,2]) {
        xpath = `/html/body/form/div[3]/div[2]/table/tbody/tr[${i}]/td[3]`;
        elms = await page.$x(xpath);
        text = await page.evaluate(elm => elm.textContent, elms[0]);
        // 数値にするために数字の0を引きます
        // trim() により前後のスペースを削除します
        days += (text.trim() - 0);
    }
    console.log(`有給の残りは${days}日です`);
    */



    // 閉じる
    browser.close();
})();
