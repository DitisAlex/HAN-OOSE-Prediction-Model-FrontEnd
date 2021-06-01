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

        await page.goto("http://localhost:3000/")
        await page.waitForTimeout(1500)
    });

    afterAll(async () => {
        await page.waitForTimeout(5000)
        await browser.close();
    });

    xtest("Navigate to /production page", async () => {
        const hours = ["1", "2", "3", "4"]
        await page.click('button[id="Solar power"]')
        await page.waitForTimeout(1500)
        await page.click('select[name="customSelect"]')
        await page.waitForTimeout(1500)
        for (i = 0; i < hours.length; i++) {
            await page.select('select#exampleCustomSelect', hours[i])
            await page.waitForTimeout(1500)
        }
        await page.click('input[name="customSwitch"]')
        await page.waitForTimeout(1500)
        await page.click('input[name="customSwitch"]')
        await page.waitForTimeout(1500)
    });

    test("Navigate to /consumption page", async () => {
        await page.click('a[id="dropdownToggle"')
        await page.waitForTimeout(1500)
        await page.click('a[id="consumptionPage"]')
        await page.waitForTimeout(1500)
    });
});
