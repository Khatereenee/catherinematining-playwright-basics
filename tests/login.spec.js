import { test, expect } from '@playwright/test';

test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('Swag Labs')).toBeVisible()
});

test('Verify login fails with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="password"]').fill('secret_sauces');
  await page.locator('[data-test="error"]').click();
  await page.locator('div').filter({ hasText: /^Epic sadface: Username and password do not match any user in this service$/ }).click();
});

test('Verify login with blank username but correct password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="error"]').click();
  await page.locator('div').filter({ hasText: /^Epic sadface: Username is required$/ }).click();
});

test('Verify login with correct username but blank password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('visual_user');
  await page.locator('[data-test="error"]').click();
  await page.locator('div').filter({ hasText: /^Epic sadface: Password is required$/ }).click();
});