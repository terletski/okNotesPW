import {When} from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";

When(/^I click on "([^"]+)" element$/, async (element: string) => {
    await BasePage.waitForElementAndClick(HomePage[element]);
});

When(/^I should see "([^"]+)" with "([^"]+)" count$/, async (element: string, expectedCount: string) => {
    await BasePage.waitForElementPresenceByText(HomePage[element], expectedCount);
});

When(/^I add "([^"]+)" ?([^"]+)item?(s)? with?( out)? discount to basket$/, async (
    itemCount: number, different: string, counts: string, discountType: string) => {
    await HomePage.addItemToBasket(+itemCount, different, discountType);
});
