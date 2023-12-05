// import { chromium } from "playwright";
const { chromium } = require('playwright');

describe('Launch Browser', () => {
    test('open letcode', async () => {
        const browser = await chromium.launch();
        const context = browser.newContext();
        const page = await context.newPage()
        await page.goto("https://letcode.in/")
    })
})