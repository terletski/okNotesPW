import {When} from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";
import BasePage from "../../pages/basePage";

When(/^I login with "([^"]+)" user$/, async (userName: string) => {
    await BasePage.waitForLoadState()
    await LoginPage.login(userName);
    await BasePage.checkIfElementExists(LoginPage["User Avatar icon"](userName));
});