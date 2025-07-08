import { test, expect } from '@playwright/test';


test.describe('Parabank Registration', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://parabank.parasoft.com/parabank/register.htm");
    });

// Before each test, we will clean the database to ensure a fresh state
test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', { name: 'Admin Page' }).click();
    await page.getByRole('button', { name: 'Clean' }).click();
});


test('Verify that user is able to register with valid credentials', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/register.htm");
    //const userName = "Katerin";
    await page.locator('[id="customer.firstName"]').fill('Katerin');
    await page.locator('[id="customer.lastName"]').fill('Matining');
    await page.locator('[id="customer.address.street"]').fill('Kalayaan');
    await page.locator('[id="customer.address.city"]').fill('Angono');
    await page.locator('[id="customer.address.state"]').fill('Rizal');
    await page.locator('[id="customer.address.zipCode"]').fill('1930');
    await page.locator('[id="customer.phoneNumber"]').fill('09123456789');
    await page.locator('[id="customer.ssn"]').fill('123456789');
    await page.locator('[id="customer.username"]').fill('Katerin');
    await page.locator('[id="customer.password"]').fill('katerin123');
    await page.locator('#repeatedPassword').fill('katerin123');
  
    await page.getByRole('button', { name: 'Register' }).click();

    // Should display the welcome message and correct URL
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/register.htm');
    await expect(page.locator('h1.title')).toContainText('Welcome ');
    //await expect(page.locator(h1.title')).toContainText('Welcome', $userName');
  });
});