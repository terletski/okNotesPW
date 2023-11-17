import {Given, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";

Given(/^User navigates to the "([^"]+)" application$/, async (applicationName: string) => {
    await BasePage.openApp("OK-Notes");
    await BasePage.waitForElement(HomePage["OK-Notes"]);
});

Then(/^I should be on "([^"]+)" page$/, async (pageName: string) => {
    const actualUrl = BasePage.getUrl();
    await BasePage.waitForLoadState();
    expect(actualUrl).toEqual(`${global.url}${pageName.toLowerCase()}`);
});