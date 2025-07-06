import { test, expect } from '@playwright/test';
// Before each test, we will clean the database to ensure a fresh state
test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', { name: 'Admin Page' }).click();
    await page.getByRole('button', { name: 'Clean' }).click();
});

// test function to verify that user is able to register
test('Verify that user is able to register with complete details', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').fill('Catherine');
  await page.locator('[id="customer.lastName"]').fill('Matining');
  await page.locator('[id="customer.address.street"]').fill('Kalayaan');
  await page.locator('[id="customer.address.city"]').fill('Angono');
  await page.locator('[id="customer.address.state"]').fill('Rizal');
  await page.locator('[id="customer.address.zipCode"]').fill('1930');
  await page.locator('[id="customer.phoneNumber"]').fill('09123456789');
  await page.locator('[id="customer.ssn"]').fill('123456789');
  await page.locator('[id="customer.username"]').fill('Khatereenee');
  await page.locator('[id="customer.password"]').fill('khatereenee123');
  await page.locator('#repeatedPassword').fill('khatereenee123');
  await page.getByRole('button', { name: 'Register' }).click();
  
  await expect(page.locator('h1.title')).toBeVisible();
  await expect(page.locator('h1.title')).toContainText(/Welcome/);
});
