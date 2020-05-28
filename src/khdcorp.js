const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 300
    });
    const [page] = await browser.pages();

    // キタムラ・ホールディングスコーポレートサイトを開く
    let url = "https://kitamura-group.co.jp/";
    await page.goto(url);

    // そのページのスクリーンショットを保存
    await page.screenshot({path: 'screenshot.png', fullPage: true})

    // ブラウザを閉じる
    browser.close();
})();

