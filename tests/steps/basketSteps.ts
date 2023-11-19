import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";
import {Then, When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import Waiters from "../../utils/waiters";
import { logger } from "../../config/winston.config";
import Pages from "../../pages/pageFactory";

When(/^I clean basket if not empty on "([^"]+)" page$/, async (page: string) => {
  logger.info(`I clean basket if not empty on "${page}" page`);
  await Pages[page].cleanUpBasket();
  await Waiters.waitForElement(HomePage["Basket Count item"], {timeout: 10000});
});

Then(/^I should see "(Item price|Item title|Total price)" for "([^"]+)" item?s? on "([^"]+)" page$/, async (
  element: string, countOfItems: string, page: string) => {
  logger.info(`I should see "${element}" for "${countOfItems}" item on "${page}" page`);
  const itemElement = await BasePage.getElementBySelector(Pages[page][element]);
  await expect(itemElement).toHaveCount(+countOfItems);
});