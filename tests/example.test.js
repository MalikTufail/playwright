// @ts-check
const { chromium,test, expect } = require('@playwright/test');
test.describe('Login functionality', () => {
  test('Navigate to Login', async () => {
  const window = await chromium.launch({
    headless: true,
  });
  const context= await window.newContext();
  const page=await context.newPage()
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  )
  await page.click("text='Login'")
  await expect(page).toHaveTitle("Account Login")
  })
})
