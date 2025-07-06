// test file for https://parabank.parasoft.com/parabank/index.htm login feature
import { test, expect } from '@playwright/test';


// test function to verify login with a valid user
test('Verify login with valid credentials', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').fill('Khatereenee');
  await page.locator('input[name="password"]').fill('khatereenee123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
});

