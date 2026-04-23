class locator {
    constructor(page){
        this.page = page;

        this.loginlink = page.locator('#nav-link-accountList')
        //this.usernameinput= page.locator('//input[@id="ap_email_login"]')
        this.usernameinput= page.locator('#ap_email')
        this.buttoninput= page.locator('//input[@class="a-button-input"]')
        this.passwordinput= page.locator('//input[@id="ap_password"]')
        this.signininput= page.locator('//input[@id="signInSubmit"]')
    }
}
module.exports = {locator};