import { test, expect } from "@playwright/test";

test("should show add to cart button", async ({ page }) => {
  await page.goto("/inventory.html");
  await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
});

test("Swag labs text should be visible", async ({ page }) => {
  await page.goto("/inventory.html");
  await expect(page.locator("text=Swag Labs")).toBeVisible();
});

test("Should be able to add item - Back Pack & Bike Light to Cart", async ({
  page,
}) => {
  await page.goto("/inventory.html");
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
 

  await expect(page.locator('[data-test="item-0-title-link"]')).toHaveText(
    /Sauce Labs Bike Light/
  );
  await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText(
    /Sauce Labs Backpack/
  );
});

test("Should be able to add item to cart and view the cart page", async ({
  page,
}) => {
  await page.goto("/inventory.html");

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();

  await page.waitForURL("/cart.html");

  await expect(page.locator('[data-test="cart-list"]')).toBeVisible();

});

test("Should be able to visit Empty Cart Page & Navigate to All Items", async ({
  page,
}) => {
  await page.goto("/cart.html");

  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByText("All Items").click();

  await page.waitForURL("/inventory.html");
  //await expect(page.getByTestId("inventory-container")).toBeVisible();
});
