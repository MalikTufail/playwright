import {test, expect, chromium} from '@playwright/test'

test('@sanity visits the site', async function () {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    // const context2 = await browser.newContext()
    const page = await context.newPage()
    const page1 = await context.newPage()
    await page1.goto('https://www.google.com')
    await page.goto('https://admin-demo.nopcommerce.com/login')
    await page.pause()
    await page.locator('#Email').press('Control+a')
    await page.locator('#Email').fill('admin@yourstore.com')
    await page.pause()
    await page.locator('#Password').press('Control+a')
    await page.locator('#Password').fill('admin')
    await page.locator('text=Log in').click()
    await context.close()
})