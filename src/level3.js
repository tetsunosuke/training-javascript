const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        // headless にするかどうかは決めて良いです
        // headless: false
    });
    // よく使うものは先に宣言しておくといいかも
    let title;
    let url;
    let elm;
    let text;
    let selector;

    const [page] = await browser.pages();
    // キタムラホールディングスのコーポレートサイトを開く
    await page.goto("https://kitamura-group.co.jp");
    // タイトルの表示
    title = await page.title();
    console.log(title);

    // プライバシーポリシーへのリンク
    selector = ".privacy";
    elm = await page.$(selector);
    text = await page.evaluate(elm => elm.textContent, elm);
    console.log(text);

    // リンクをクリック
    await page.click(selector);
    // タイトルを取得して表示
    title = await page.title();
    console.log(title);

    // h3を複数取得してfor文で全て表示する
    let elms = await page.$$("h3");
    for (let i=0; i < elms.length; i++) {
        text = await page.evaluate(elm => elm.textContent, elms[i]);
        console.log(text);
    }

    // 戻るを押す
    await page.goBack();
    // タイトル表示
    title = await page.title();
    console.log(title);

    // 閉じる
    browser.close();
})();
