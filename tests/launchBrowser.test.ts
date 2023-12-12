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
            await page.click('text= Log in')
            await page.fill('input[name="email"]', "k350@gmail.com")
            await page.fill('input[name="password"]', 'pass123$') 
            await page.click('button:text("LOGIN")')   
            await browser.close();
        } catch (error) {
            console.error('Test failed:', error);
            throw error;
        }
    }, 30000);    
})