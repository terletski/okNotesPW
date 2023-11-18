import Waiters from "../utils/waiters";

export default class BasePage {
  static async openApp() {
    const url = global.url;
    await global.page.goto(url);
    console.info(`Opened page ${url}`);
  }

  static getUrl() {
    return global.page.url();
  }

  static async waitForElementAndClick(selector: string) {
    await Waiters.waitForLoadState();
    await global.page.click(selector);
  }

  static async clearAndTypeInput(selector: string, text: string) {
    await global.page.click(selector);
    await global.page.locator(selector).clear();
    await global.page.type(selector, text);
  }

  static async checkIfElementExists(selector: string) {
    return (await global.page.$(selector)) !== null;
  }

  static getTextContent(selector: string) {
    return global.page.textContent(selector);
  }

  static async getElementBySelector(selector: string) {
    return (await global.page.locator(selector));
  }
}
