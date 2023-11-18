import {When} from "@cucumber/cucumber";
import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";
import Waiters from "../../utils/waiters";
import {logger} from "../../config/winston.config";

When(/^I click on "([^"]+)" element$/, async (element: string) => {
  logger.info(`I click on "${element}" element`);
  await BasePage.waitForElementAndClick(HomePage[element]);
  await Waiters.waitForLoadState();
});

When(/^I should see "([^"]+)" with "([^"]+)" count$/, async (element: string, expectedCount: string) => {
  logger.info(`I should see "${element}" with "${expectedCount}" count`);
  await Waiters.waitForElementPresenceByText(HomePage[element], expectedCount);
});

When(/^I should see "([^"]+)" element$/, async (element: string) => {
  logger.info(`I should see "${element}" element`);
  await Waiters.waitForElementVisibility(HomePage[element]);
});

When(/^I add "([^"]+)" ?([^"]+)item?s? with?( out)? discount to basket$/, async (
  itemCount: number, different: string, discountType: string) => {
  logger.info(`I add "${itemCount}" items with ${discountType ? discountType : ""} discount to basket`);
  await HomePage.addItemToBasket(+itemCount, different, discountType);
});
