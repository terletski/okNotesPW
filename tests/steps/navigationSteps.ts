import {Given, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";
import Waiters from "../../utils/waiters";
import {logger} from "../../config/winston.config";

Given(/^User navigates to the "([^"]+)" application$/, async (applicationName: string) => {
  logger.info(`User navigates to the "${applicationName}" application`);
  await BasePage.openApp();
  await Waiters.waitForElement(HomePage[applicationName]);
});

Then(/^I should be on "([^"]+)" page$/, async (pageName: string) => {
  logger.info(`I should be on "${pageName}" page`);
  const actualUrl = BasePage.getUrl();
  await Waiters.waitForLoadState();
  expect(actualUrl).toEqual(`${global.url}${pageName.toLowerCase()}`);
});