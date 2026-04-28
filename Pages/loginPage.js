const { expect } = require("@playwright/test");
const { Helpers } = require("../Utils/helpers");
const { loginLocators } = require("../Locators/LoginLocators");

class loginPage {
    constructor(page){
        this.page = page;
        this.loc = new loginLocators(page);
        this.help = new Helpers(page);
    }

    async gotologinpage(url){
        await this.help.open(url);
    }

    async login(Username, Password){ 
        //console.log("Username:", Username);
        //console.log("Password:", Password);
        await this.loc.usernameinput.fill(Username); 
        await this.loc.passwordinput.fill(Password);
        await this.loc.signininput.click();
    }
}

module.exports = { loginPage };
