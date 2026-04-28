const { expect } = require("@playwright/test");
const { Helpers } = require("../Utils/helpers");
const { LoginLocators } = require("../Locators/loginLocators");

class loginPage {
    constructor(page){
        this.page = page;
        this.loc = new LoginLocators(page);
        this.help = new Helpers(page);
    }

    async gotologinpage(url){
        await this.help.open(url);
    }

    async login(username, password){ 
        await this.loc.usernameinput.fill(username); 
        await this.loc.passwordinput.fill(password);
        await this.loc.signininput.click();
    }
}

module.exports = { loginPage };
