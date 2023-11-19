import {When} from "@cucumber/cucumber";
import BasePage from "../../pages/basePage";
import Waiters from "../../utils/waiters";
import {logger} from "../../config/winston.config";
import Pages from "../../pages/pageFactory";

When(/^I click on "([^"]+)" element on "([^"]+)" page$/, async (element: string, page: string) => {
  logger.info(`I click on "${element}" element on "${page}" page`);
  await BasePage.waitForElementAndClick(Pages[page][element]);
  await Waiters.waitForLoadState();
});

When(/^I should see "([^"]+)" with "([^"]+)" count on "([^"]+)" page$/, async (
  element: string, expectedCount: string, page: string) => {
  logger.info(`I should see "${element}" with "${expectedCount}" count on "${page}" page`);
  await Waiters.waitForElementPresenceByText(Pages[page][element], expectedCount);
});

When(/^I should see "([^"]+)" element on "([^"]+)" page$/, async (element: string, page: string) => {
  logger.info(`I should see "${element}" element on "${page}" page`);
  await Waiters.waitForElementVisibility(Pages[page][element]);
});

When(/^I add "([^"]+)" ?([^"]+)item?s? with?( out)? discount to basket on "([^"]+)" page$/, async (
  itemCount: number, different: string, discountType: string, page: string) => {
  logger.info(`I add "${itemCount}" items with ${discountType ? discountType : ""} discount to basket on "${page}" page`);
  await Pages[page].addItemToBasket(+itemCount, different, discountType);
});
