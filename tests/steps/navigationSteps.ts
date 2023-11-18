import {Given, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";
import Waiters from "../../utils/waiters";

Given(/^User navigates to the "([^"]+)" application$/, async (applicationName: string) => {
  await BasePage.openApp(applicationName);
  await Waiters.waitForElement(HomePage[applicationName]);
});

Then(/^I should be on "([^"]+)" page$/, async (pageName: string) => {
  const actualUrl = BasePage.getUrl();
  await Waiters.waitForLoadState();
  expect(actualUrl).toEqual(`${global.url}${pageName.toLowerCase()}`);
});