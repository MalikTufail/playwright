import {test} from '@playwright/test'
import LoginPage from '../pages/loginPage'

test('first test', async function({page}) {
    const Login = new LoginPage(page)
    await Login.visitPage()
    await Login.login('tomsmith', 'SuperSecretPassword!')
    // await page.goto('https://the-internet.herokuapp.com/login')
    // await page.locator('#username').fill('tomsmith')
    // await page.locator('#password').fill('SuperSecretPassword!')
    // await page.locator('text=Log in').click()
})