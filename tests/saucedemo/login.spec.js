// test file for https://www.saucedemo.com/  login feature
import { test, expect } from '@playwright/test';


// test function to verify login with a valid credentials
test('Should login successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('visual_user');
  await expect(page.locator('[data-test="username"]')).toHaveValue('visual_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await expect(page.getByText('Swag Labs')).toBeVisible();
  await page.screenshot({path: 'test - screenshots/successful-login.png', fullPage: true })
});

// test function to verify login with a invalid credentials
test('Should not login successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('invalid_user');
  await expect(page.locator('[data-test="username"]')).toHaveValue('invalid_user');
  await page.locator('[data-test="password"]').fill('invalid_sauce');
  await expect(page.locator('[data-test="password"]')).toHaveValue('invalid_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await page.screenshot({path: 'test - screenshots/unsuccessful-login.png', fullPage: true })
});





/* 
Create new folder 'saucedemo'
Create new spec_file 'login.spec.js'
run command npx playwright codegen https://www.saucedemo.com/
record actions and assertions
Copy codes to the created spec file
run command npx playwright test tests/saucedemo/login.spec.js --project chromium --ui
Edit codes to expected values for username and password
Again, run command npx playwright test tests/saucedemo/login.spec.js --project chromium --ui
if passed,  run command npx playwright codegen https://www.saucedemo.com/ 
Record assertions (check for URL, Swag Labs header)
Copy codes to spec file
Add codes for expected value for toHaveURL and screenshot snap
run command npx playwright test tests/saucedemo/login.spec.js --project chromium --ui
If passed, notice that under parent file, test - screenshots folder is automatically added or created
The test - screenshots folder contain snap images of expected results 
*/