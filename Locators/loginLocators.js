class locator {
    constructor(page){
        this.page = page;

        this.loginlink = page.locator('#nav-link-accountList')
        //this.usernameinput= page.locator('//input[@id="ap_email_login"]')
        this.usernameinput= page.locator('#ap_email')
        this.buttoninput= page.locator('#continue-announce')
        this.passwordinput= page.locator('#ap_password')
        this.signininput= page.locator('#signInSubmit')
    }
}
module.exports = {locator};