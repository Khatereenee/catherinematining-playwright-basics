
import { test as setup } from "@playwright/test";
import { STORAGE_STATE } from "../playwright.config.ts";
import { LoginPage } from "./../pages/login.page";



setup("Do Login", async ({ page }) => {
    let loginPage: LoginPage;
    loginPage = new LoginPage(page);
    await loginPage.navigateTo();

    await loginPage.login(process.env.SAUCE_USERNAME!, process.env.SAUCE_PASSWORD!);

    await page.waitForURL("https://www.saucedemo.com/inventory.html");

    await loginPage.verifyLoginSuccess();

    await page.context().storageState({ path: STORAGE_STATE });
});
