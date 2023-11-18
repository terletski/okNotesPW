import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";
import {Then, When} from "@cucumber/cucumber";
import BasketPage from "../../pages/basketPage";
import {expect} from "@playwright/test";
import Waiters from "../../utils/waiters";
import { logger } from "../../config/winston.config";

When(/^I clean basket if not empty$/, async () => {
  logger.info("I clean basket if not empty");
  await BasketPage.cleanUpBasket();
  await Waiters.waitForElement(HomePage["Basket Count item"], {timeout: 10000});
});

Then(/^I should see "(Item price|Item title|Total price)" for "([^"]+)" item?s? in the basket$/, async (
  element: string, countOfItems: string) => {
  logger.info(`I should see "${element}" for "${countOfItems}" item in the basket`);
  const itemElement = await BasePage.getElementBySelector(BasketPage[element]);
  await expect(itemElement).toHaveCount(+countOfItems);
});