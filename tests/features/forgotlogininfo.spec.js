// test file for https://parabank.parasoft.com/parabank/index.htm forgot login info? feature
import { test, expect } from '@playwright/test';

// test function to recover existing/registered account
test('Verify able to recover with valid credentials', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Forgot login info?' }).click();
  await page.locator('#firstName').fill('Catherine');
  await page.locator('#lastName').fill('Matining');
  await page.locator('[id="address.street"]').fill('Kalayaan');
  await page.locator('[id="address.city"]').fill('Angono');
  await page.locator('[id="address.state"]').fill('Rizal');
  await page.locator('[id="address.zipCode"]').fill('1930');
  await page.locator('#ssn').fill('123456789');
  await page.getByRole('button', { name: 'Find My Login Info' }).click();
  await expect(page.getByRole('heading', { name: 'Customer Lookup' })).toBeVisible();
  await expect(page.getByText('Your login information was')).toBeVisible();
  await expect(page.locator('#rightPanel')).toContainText('Your login information was located successfully. You are now logged in.');
  await expect(page.locator('#rightPanel')).toContainText('Username: Khatereenee Password: khatereenee123');
});
