import {setDefaultTimeout, AfterAll, Before, BeforeAll} from '@cucumber/cucumber';
import {chromium} from "@playwright/test";

import dotenv from 'dotenv';

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

AfterAll(async function () {
    await global.browser.close();
});
