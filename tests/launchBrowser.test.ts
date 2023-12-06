import { chromium } from "playwright";
// const { chromium } = require('playwright');

describe('Launch Browser', () => {
    test('open letcode', async () => {
        try {
            const browser = await chromium.launch({
                headless: false
            });
            const page = await browser.newPage();
            await page.goto("https://letcode.in/");    
            await browser.close();
        } catch (error) {
            console.error('Test failed:', error);
            throw error;
        }
    }, 30000);    
})