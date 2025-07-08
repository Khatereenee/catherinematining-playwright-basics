// test file for https://www.saucedemo.com/ Assertions
import { test, expect } from '@playwright/test';

test('Session 10 Assertions with Sauce Demo', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");

    //Auto re-trying assertion
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

    //Non-retrying assertion and negating matchers
    const UsernameField = page.locator('[data-test="username"]');
    expect(UsernameField).not.toBeNull();

    //Negating matcher
    await expect(page.getByRole("button", { name: "Login" })).not.toHaveText("Sign In");
    
    //Check for element visibility
    await expect.soft(page.getByPlaceholder("Username"), 'Placeholder Username is Visible').toBeVisible();
    await expect.soft(page.getByPlaceholder("Password")).toBeVisible();

    //Expected Message
    await expect(page.getByText("Accepted usernames are:"), 'Expected the page to display "Accepted username" text').toBeVisible();

    //Other actions
    await page.getByPlaceholder("Username").fill("visual_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    

})
    
