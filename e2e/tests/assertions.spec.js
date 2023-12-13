import {test, expect} from '@playwright/test'

test('@smoke assertions demo', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    await expect(page.locator('#__next > div > div > section > div > h1')).toHaveText('The Kitchen')

    if( await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }
    await expect(page).toHaveURL('https://kitchen.applitools.com')
    await expect(page).toHaveTitle(/.*Kitchen/)
    await page.close()
})

