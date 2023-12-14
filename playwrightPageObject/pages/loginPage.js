class LoginPage {
    constructor(page) {
        this.page = page;
        this.userName = page.locator('#username')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('text=Log in')
    }

    async visitPage() { 
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username, password) {
        await this.userName.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}

export default LoginPage