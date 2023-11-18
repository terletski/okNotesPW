import BasePage from "./basePage";
import Waiters from "../utils/waiters";

class HomePage extends BasePage {

  get ["OK-Notes"]() {
    return ".navbar-brand";
  }

  get ["Login link"]() {
    return "[href='/login']";
  }

  get ["Basket Count item"]() {
    return "//*[@class='basket-count-items badge badge-primary']";
  }

  get ["Basket icon"]() {
    return "#dropdownBasket";
  }

  get ["Go To Basket button"]() {
    return "[href='/basket']";
  }

  get ["Discount item"]() {
    return (itemCount: number) =>
      `(//*[contains(@class, "note-item") and (contains(@class, "hasDiscount"))]//button)[${itemCount}]`;
  }

  get ["Non Discount item"]() {
    return (itemCount: number) =>
      `(//*[contains(@class, "note-item") and not(contains(@class, "hasDiscount"))]//button)[${itemCount}]`;

  }

  get ["Count Of Discount item"]() {
    return "(//*[contains(@class, 'note-item') and (contains(@class, 'hasDiscount'))]//input)[1]";
  }

  get ["Next Page icon"]() {
    return "//li[@class='page-item ']";
  }

  async addDifferentItems(countOfItems: number, discountType: string) {
    for (let i = 1; i <= countOfItems; i++) {
      const discountItemLocator = discountType !== null ? this["Non Discount item"](i)
        : this["Discount item"](i);
      await Waiters.waitForElementVisibility(discountItemLocator);
      await BasePage.waitForElementAndClick(discountItemLocator);
    }
  }

  async addSameItems(countOfItems: number, discountType: string) {
    const discountItemLocator = discountType !== null ? this["Non Discount item"](1)
      : this["Discount item"](1);
    await Waiters.waitForElementVisibility(this["Count Of Discount item"]);
    await BasePage.clearAndTypeInput(this["Count Of Discount item"], countOfItems.toString());
    await Waiters.waitForElementVisibility(discountItemLocator);
    await BasePage.waitForElementAndClick(discountItemLocator);
  }

  async addItemToBasket(countOfItems: number, different: string, discountType: string) {
    different.includes("same") ? await this.addSameItems(countOfItems, discountType) :
      await this.addDifferentItems(countOfItems, discountType);
  }
}

export default new HomePage();