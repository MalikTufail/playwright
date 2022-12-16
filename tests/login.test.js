// @ts-check
const { chromium,test, expect } = require('@playwright/test');
test.describe('Login functionality', () => {
  test.beforeEach(async() => {
    const window = await chromium.launch();
    const context= await window.newContext();
    const page=await context.newPage()
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.hover(
      "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
    )
    await page.click("text='Login'")
    await expect(page).toHaveTitle("Account Login")
  })
  test('Navigate to Login', async () => {
  const window = await chromium.launch();
  const context= await window.newContext();
  const page=await context.newPage()
  await expect(page).toHaveTitle("Account Login")
  })

  test('Verify that the user is unable to login by providing the invalid Email and Password', async () => {
    const window = await chromium.launch();
    const context = await window.newContext();
    const page = await context.newPage()
    const email = page.getByPlaceholder("input[name='email']")
    await email.type("abc@gmail.com")
  })
})
