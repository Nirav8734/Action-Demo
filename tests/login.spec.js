import {test} from "@playwright/test";
import {Helpers} from '../Utils/helpers';
import { testData } from '../Data/testData';
import {loginPage} from '../Pages/loginPage';
import {LoginLocators} from '../Locators/LoginLocators';

test('verify valid login', async ({ page }) => {
    const login = new loginPage(page);
   
    await login.gotologinpage(testData.login.url);
    //await page.waitForTimeout(5000);

    await login.login(testData.login.validuser.username,
        testData.login.validuser.password);
})