import BasePage from "./basePage";
import HomePage from "./homePage";
import {expect} from "@playwright/test";

class BasketPage extends BasePage {

    get ["Clear Basket button"]() {
        return `//*[contains(@class, "actionClearBasket")]//a`;
    }

    get ["Items"]() {
        return `.list-group.list-group-flush`;
    }

    get ["Item title"]() {
        return `span.basket-item-title`;
    }

    get ["Item price"]() {
        return `span.basket-item-price`;
    }

    get ["Total price"]() {
        return `span.basket_price`;
    }

    async cleanUpBasket() {
        await BasePage.waitForLoadState();
        await BasePage.waitForElement(HomePage["Basket Count item"]);
        const basketCountItems = await BasePage.getTextContent(HomePage["Basket Count item"]);
        if (basketCountItems !== "0") {
            await BasePage.waitForElementAndClick(HomePage["Basket icon"]);
            await BasePage.waitForElement(this["Items"]);
            await BasePage.waitForElementAndClick(this["Clear Basket button"]);
            await BasePage.waitForElementPresenceByText(HomePage["Basket Count item"], "0");
        } else {
            console.info("Basket is empty");
        }
    }
}

export default new BasketPage();