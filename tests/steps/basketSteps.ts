import BasePage from "../../pages/basePage";
import HomePage from "../../pages/homePage";
import {Then, When} from "@cucumber/cucumber";
import BasketPage from "../../pages/basketPage";
import {expect} from "@playwright/test";

When(/^I clean basket if not empty$/, async () => {
    await BasketPage.cleanUpBasket();
    await BasePage.waitForElement(HomePage["Basket Count item"], {timeout: 10000})
});

Then(/^I should see "(Item price|Item title|Total price)" for "([^"]+)" item?s? in the basket$/, async (
    element: string, countOfItems: string) => {
    const itemElement = await BasePage.getElementBySelector(BasketPage[element]);
    await expect(itemElement).toHaveCount(+countOfItems);
});