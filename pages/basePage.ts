import {expect} from "@playwright/test";

export default class BasePage {
    static async openApp(appName: string) {
        const url = global.url;
        await global.page.goto(url);
        console.info(`Opened page ${url}. Application name: ${appName}`);
    }

    static async close() {
        await global.page.close();
    }

    static async waitForElement(selector: string, options?: object) {
        return await global.page.waitForSelector(selector, options);
    }

    static async waitForElementAndClick(selector: string) {
        await BasePage.waitForLoadState();
        await global.page.click(selector);
    }

    static async executeScript(script: string) {
        await global.page.evaluate(script)
    }

    static async fillInput(selector: string, text: string) {
        return await global.page.fill(selector, text);
    }


    static async clearAndTypeInput(selector: string, text: string) {
        await global.page.click(selector);
        await global.page.locator(selector).clear();
        await global.page.type(selector, text);
    }

    static async waitForLoadState() {
        return await global.page.waitForLoadState("networkidle");
    }

    // static async scrollToElement(selector: string) {
    //     const pageElement = await this.page.$(selector);
    //     await pageElement.scrollIntoViewIfNeeded();
    // }

    // static async selectOptionByValue(dropDown: string, value: string) {
    //     await this.page.click(dropDown);
    //     await this.page.click(`[data-value='${value}']`);
    // }

    static async checkIfElementExists(selector: string) {
        return (await global.page.$(selector)) !== null;
    }

    //
    static async getInnerText(selector: string) {
        return global.page.innerText(selector);
    }

    //
    static getTextContent(selector: string) {
        return global.page.textContent(selector);
    }

    //
    static async getElementBySelector(selector: string) {
       return (await global.page.locator(selector))
    }
    //
    static async waitForTextInInput(selector: string) {
        await global.page.waitForSelector(`${selector}:not([value=""])`);
    }

    static async waitForElementPresenceByText(selector: string, text: string, options?: object) {
        const locator = global.page.locator(selector);
        await expect(locator).toHaveText(text, options);
    }

    static async waitForElementVisibility(selector: string, options?: object) {
        const locator = global.page.locator(selector);
        await expect(locator).toBeVisible(options);
    }


    static async getAttribute(selector: string, attribute: string) {
        await global.getAttribute(selector, attribute);
    }

    static async getPageTitle() {
        await global.page.title();
    }

    static getUrl() {
        return global.page.url();
    }
}
