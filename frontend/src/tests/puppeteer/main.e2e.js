const puppeteer = require("puppeteer");
jest.setTimeout(250000);

describe("Prediction Model E2E Tests", () => {
    const testSpeed = 10;
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: testSpeed,
            defaultViewport: null,
            args: [`--window-size=1920,1080`],
        });
        page = await browser.newPage();

        await page.goto("http://localhost:3000/");
    });

    afterAll(async () => {
        await page.waitForTimeout(5000)
        await browser.close();
    });

    test("Navigate to /production page", async () => {
        await page.click('button[id="Energy production"]')
        // alternative way to change url/page -> await page.goto("http://localhost:3000/consumption")
    });
});