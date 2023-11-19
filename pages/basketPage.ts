import BasePage from "./basePage";
import HomePage from "./homePage";
import Waiters from "../utils/waiters";

class BasketPage extends BasePage {

  get ["Clear Basket button"]() {
    return "//*[contains(@class, 'actionClearBasket')]//a";
  }

  get ["Items"]() {
    return ".list-group.list-group-flush";
  }

  get ["Item title"]() {
    return "span.basket-item-title";
  }

  get ["Item price"]() {
    return "span.basket-item-price";
  }

  get ["Total price"]() {
    return "span.basket_price";
  }

  get ["Go To Basket button"]() {
    return "[href='/basket']";
  }

  async cleanUpBasket() {
    await Waiters.waitForLoadState();
    await Waiters.waitForElement(HomePage["Basket Count item"]);
    const basketCountItems = await BasePage.getTextContent(HomePage["Basket Count item"]);
    if (basketCountItems !== "0") {
      await BasePage.waitForElementAndClick(HomePage["Basket icon"]);
      await Waiters.waitForElement(this["Items"]);
      await BasePage.waitForElementAndClick(this["Clear Basket button"]);
      await Waiters.waitForElementPresenceByText(HomePage["Basket Count item"], "0");
    } else {
      console.info("Basket is empty");
    }
  }
}

export default new BasketPage();