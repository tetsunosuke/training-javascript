// 設定内容は下記のように別ファイルにしておくとパスワードとかを漏らさなくて良いので便利です
const {kinrouConfig} = require('./kinrouconfig.js')

const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({});
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

    // 打刻
    await page.click("[name='dakoku']");

    // 閉じる
    browser.close();
})();
