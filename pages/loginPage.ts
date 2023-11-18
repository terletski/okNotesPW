import BasePage from "./basePage";
import Waiters from "../utils/waiters";

class LoginPage extends BasePage {

  get ["Login field"]() {
    return "input#loginform-username";
  }

  get ["Password field"]() {
    return "input#loginform-password";
  }
  get ["Login button"]() {
    return "button[type='submit']";
  }
  get ["Green Password icon"]() {
    return "div.field-loginform-username [aria-invalid='false']";
  }
  get ["Green Login icon"]() {
    return "div.field-loginform-password [aria-invalid='false']";
  }

  get ["User Avatar icon"]() {
    return userName => `//*[@class="nav-link mr-4"]//*[.="${userName}"]`;
  }

  async login(user: string) {
    const userName = global.userName.toLowerCase() === user ? global.userName : user;
    const password = global.userPassword;
    await BasePage.clearAndTypeInput(this["Login field"], userName);
    await BasePage.clearAndTypeInput(this["Password field"], password);
    await BasePage.waitForElementAndClick(`${this["Login button"]}`);
    await Waiters.waitForLoadState();
  }
}

export default new LoginPage();