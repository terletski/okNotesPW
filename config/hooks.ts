import {setDefaultTimeout, Before, BeforeAll, After, AfterAll} from "@cucumber/cucumber";
import {chromium} from "@playwright/test";

import dotenv from "dotenv";

const DEFAULT_TIMEOUT = 20000;
setDefaultTimeout(DEFAULT_TIMEOUT);

dotenv.config();

BeforeAll(async function () {
  global.browser = await chromium.launch({headless: false});
});

Before(async function () {
  const context = await global.browser.newContext();
  global.page = await context.newPage();
  global.url = process.env.URL;
  global.userName = process.env.USER_NAME;
  global.userPassword = process.env.PASSWORD;
});

After(async function (scenario) {
  const screenshot = await global.page.screenshot();
  if(scenario.result.status === "FAILED") {
    this.attach(screenshot, "image/png");
  }
});

AfterAll(async function () {
  await global.page.close();
  await global.browser.close();
});
