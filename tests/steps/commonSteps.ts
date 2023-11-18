import {When} from "@cucumber/cucumber";
import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";
import Waiters from "../../utils/waiters";

When(/^I click on "([^"]+)" element$/, async (element: string) => {
  await BasePage.waitForElementAndClick(HomePage[element]);
});

When(/^I should see "([^"]+)" with "([^"]+)" count$/, async (element: string, expectedCount: string) => {
  await Waiters.waitForElementPresenceByText(HomePage[element], expectedCount);
});

When(/^I add "([^"]+)" ?([^"]+)item?s? with?( out)? discount to basket$/, async (
  itemCount: number, different: string, discountType: string) => {
  await HomePage.addItemToBasket(+itemCount, different, discountType);
});
