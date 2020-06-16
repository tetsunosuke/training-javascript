// 設定内容は下記のように別ファイルにしておくとパスワードとかを漏らさなくて良いので便利です
const {kinrouConfig} = require('./kinrouconfig.js')
const dateformat = require('dateformat');


const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
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

    // 打刻
    await page.click("[name='dakoku']");

    const d = new Date();
    const year = dateformat(d, 'yyyy');
    const month = dateformat(d, 'mm');
    const kijunDate = dateformat(d, 'yyyymmdd');

    await page.goto(`https://kinrou.sas-cloud.jp/kinrou/dakokuList/index?syainCode=${kinrouConfig.userId}&year=${year}&month=${month}&kijunDate=${kijunDate}`);

    let elms = await page.$$(".dakoku-all-list tr");
    let elm;
    text = "最後の打刻は：";
    for (i of [3,4]) {
        elm = await page.$(`.dakoku-all-list tr:nth-of-type(${elms.length-1}) td:nth-of-type(${i})`);
        text += await page.evaluate(elm => elm.textContent, elm)
    }
    console.info(text)
    // 閉じる
    browser.close();
})();
