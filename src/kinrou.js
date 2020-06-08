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

    // 有給照会、ではなく、個人照会から見ます
    await Promise.all([
        page.waitForNavigation(),
        page.click(".menuBtn")
    ]);

    // 上の表の中からtdの6番目を拾ってきます
    let elms = await page.$$("#getuji_scroll td");
    text = await page.evaluate(elm => elm.textContent, elms[5]);
    console.log(`有給の残りは${text}日です`);

    // 閉じる
    browser.close();
})();
