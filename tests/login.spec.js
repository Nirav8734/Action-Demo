import {test} from "@playwright/test";
import {Helpers} from '../Utils/helpers';
import { TestData } from "../Data/testData";
import {loginPage} from '../Pages/loginPage';

test('verify valid login', async ({ page }) => {
    const login = new loginPage(page);
   
    await login.gotologinpage(TestData.login.url);
    await page.waitForTimeout(5000);

    await login.login(TestData.login.validuser.username,
        TestData.login.validuser.password);
})