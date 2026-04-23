const {expect} = require("@playwright/test");
const {Helpers} = require("../Utils/helpers");
const {locator} = require("../Locators/loginLocators");


class loginPage {
    constructor(page){
        this.page=page;
        this.loc = new locator(page);
        this.help = new Helpers(page);
    }

    async gotologinpage(url){
        await this.help.open(url)
    }

    async login(username , password){
        await this.page.click(this.loc.loginlink);
        await this.page.fill(this.loc.usernameinput, username)
        await this.page.click(this.loc.buttoninput);
        await this.page.fill(this.loc.passwordinput, password);
        await this.page.click(this.loc.signininput);
    }
}

module.exports = {loginPage};

