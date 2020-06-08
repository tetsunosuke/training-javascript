const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        // headless にするかどうかは決めて良いです
        headless: false,
    });
    // よく使うものは先に宣言しておくといいかも
    let text;

    const [page] = await browser.pages();
    await page.goto("https://docs.google.com/forms/d/e/1FAIpQLSfCs2FzbezLdOUZAqu44iCJCwGedRSzcvkiHGKQamWU28a_kg/viewform");

    await page.type("[name='entry.510754057']", "いとうてつのすけ");

    let encodedString = new Buffer.from("自分のメールアドレス").toString("base64");
    await page.type("[name='entry.628985789']", encodedString);


    // テキストが"送信" となっているボタンを押します
    const xpath = "//span[contains(text(), '送信')]";
    await page.waitForXPath(xpath);
    await (await page.$x(xpath))[0].click();

    // 閉じる
    browser.close();
})();
