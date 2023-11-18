import {expect} from "@playwright/test";

export default class Waiters {

  static async waitForElement(selector: string, options?: object) {
    return await global.page.waitForSelector(selector, options);
  }

  static async waitForLoadState() {
    return (await global.page.waitForLoadState("networkidle"));
  }

  static async waitForElementPresenceByText(selector: string, text: string, options?: object) {
    const locator = global.page.locator(selector);
    await expect(locator).toHaveText(text, options);
  }

  static async waitForElementVisibility(selector: string, options?: object) {
    const locator = global.page.locator(selector);
    await expect(locator).toBeVisible(options);
  }
}