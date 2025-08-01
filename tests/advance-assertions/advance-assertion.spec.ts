
import { test, expect } from "@playwright/test";

test("Advanced assertions example with Sauce Demo", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Auto-retrying assertion
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

  //Non-retrying assertion + negating matchers
  const UsernameField = page.locator('[data-test="username"]');
  expect(UsernameField).not.toBeNull();

  //Negating matcher
  await expect(page.getByRole("button", { name: "Login" })).not.toHaveText("Sign In");

  // Editing the soft assertion to check for visibility of elements
  await expect.soft(page.getByPlaceholder("Username"), 'Placeholder Username is visible').toBeVisible();
  await expect.soft(page.getByPlaceholder("Password"), 'Placeholder Password is visible').toBeVisible();

  // Custom expect message
  await expect(page.getByText("Accepted usernames are:"),'Expected the page to display the "Accepted usernames are:" text').toContainText('Accepted usernames are');

    // Continue with other actions
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();

    // Verify login success
    await expect(page.getByText("Products")).toBeVisible();


    await expect(page.getByText("$29.99")).not.toBeEmpty();

    //auto-retrying
    const value1 = page.getByText("$29.99");
    await expect(value1).toHaveText("$29.99");

     // non-retrying assertions
    const value = await page.getByText("$29.99").textContent();
    const stringValue = value;
    console.log(stringValue);
    expect(stringValue).toHaveLength(6);
});
