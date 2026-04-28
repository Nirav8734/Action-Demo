class loginLocators {
    constructor(page){
        this.page = page;

        
        this.loginlink = page.locator('#nav-link-accountList')
        //this.usernameinput= page.locator('//input[@id="ap_email_login"]')
        this.usernameinput= page.locator('//input[@placeholder="Username"]')
        //this.buttoninput= page.locator('#continue-announce')
        this.passwordinput= page.locator('//input[@placeholder="Password"]')
        this.signininput= page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    }
}
module.exports = {loginLocators};