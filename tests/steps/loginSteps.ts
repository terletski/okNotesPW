import {When} from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";
import BasePage from "../../pages/basePage";
import Waiters from "../../utils/waiters";
import {logger} from "../../config/winston.config";

When(/^I login with "([^"]+)" user$/, async (userName: string) => {
  logger.info(`I login with "${userName}" user`);
  await Waiters.waitForLoadState();
  await LoginPage.login(userName);
  await BasePage.checkIfElementExists(LoginPage["User Avatar icon"](userName));
});