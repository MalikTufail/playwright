// @ts-check
const { chromium,test, expect } = require('@playwright/test');
test.describe('Login functionality', () => {
  // test.beforeEach(async() => {
  //   const window = await chromium.launch();
  //   const context= await window.newContext();
  //   const page=await context.newPage()
  //   await page.goto('https://ecommerce-playground.lambdatest.io/');
  //   await page.hover(
  //     "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  //   )
  //   await page.click("text='Login'")
  //   await expect(page).toHaveTitle("Account Login")
  // })
  // test('Navigate to Login', async () => {
  // const window = await chromium.launch();
  // const context= await window.newContext();
  // const page=await context.newPage()
  // await expect(page).toHaveTitle("Account Login")
  // })

  // test('Verify that the user is unable to login by providing the invalid Email and Password', async () => {
  //   const window = await chromium.launch();
  //   const context = await window.newContext();
  //   const page = await context.newPage()
  //   const email = page.getByPlaceholder("input[name='email']")
  //   await email.type("abc@gmail.com")
  // })

  // test('homepage has title and links to intro page', async ({ page }) => {
//   await page.goto('https://');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);

//   // create a locator
//   const getStarted = page.getByRole('link', { name: 'Get started' });

//   // Expect an attribute "to be strictly equal" to the value.
//   await expect(getStarted).toHaveAttribute('href', '/docs/intro');

//   // Click the get started link.
//   await getStarted.click();
  
//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/);
// });

// test('homepage has title and links to intro page', async ({page}) => {
//   test.setTimeout(500000)
//   await page.goto('https://bostad.blocket.se/p2/sv/profile/mccdc3nm/');
//   await page.getByRole('button', { name: 'Jag samtycker' }).click();
//   const h2Elements = await page.locator("(//h2[@class='typography__Element-sc-n5ojo8-0 huMlun'])[1]").textContent()
//   await page.goto('https://samtrygg.se/');
//   await page.fill('[id="hero-search"]', `${h2Elements} Stockholm`)
//   await page.click("[class='top-panel-search__btn']")
//   const [newtab]=await Promise.all([
//     page.waitForEvent('popup'),
//   page.locator("//img[@alt='https://samtryggdata.s3.amazonaws.com/images/286x286/b61c5a7424f0296764925c582e298f49.jpg']").click()

//   ])


    
// const verfiy= await newtab.locator("#js-scroll-to-map")
// await expect(verfiy).toContainText(""+h2Elements)
// await page.goto("https://bostad.blocket.se/p2/sv/profile/mccdc3nm/")
// });

test.only('test', async ({page}) => {
  test.setTimeout(500000)
  await page.goto('https://bostad.blocket.se/p2/sv/profile/mccdc3nm/');
  await page.getByRole('button', { name: 'Jag samtycker' }).click();
  await page.waitForSelector(".list-of-homes__HomeItemGrid-sc-1ix39jf-2.cOzWyV a h2",{timeout:50000})
  const h2Elements = await page.$$(".list-of-homes__HomeItemGrid-sc-1ix39jf-2.cOzWyV a h2");
  console.log(h2Elements.length)
  for await(const element of h2Elements){
    //await page.waitForSelector(".list-of-homes__HomeItemGrid-sc-1ix39jf-2.cOzWyV a h2",{timeout:50000})
    //await page.waitForLoadState('networkidle')
     const homes = await element.textContent()
     console.log(homes)
    
     await page.goto("https://samtrygg.se/")
     await page.fill('[id="hero-search"]', `${homes} Stockholm`)
     await page.click("[class='top-panel-search__btn']")
     const [newtab]=await Promise.all([
      page.waitForEvent('popup'),
    page.locator("//img[@alt='https://samtryggdata.s3.amazonaws.com/images/286x286/b61c5a7424f0296764925c582e298f49.jpg']").click()
  ])
  const verfiy= await newtab.locator("#js-scroll-to-map")
  await expect(verfiy).toContainText(""+homes)
  await newtab.close()
  await page.goBack()
  //await page.goto("https://bostad.blocket.se/p2/sv/profile/mccdc3nm/")
  await page.waitForTimeout(50000)
  }
  
})
})
