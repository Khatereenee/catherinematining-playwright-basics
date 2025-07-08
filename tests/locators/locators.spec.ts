// test file for https://labs.testautomationph.com/table  Locators
import { test, expect } from '@playwright/test';

test.describe('Pokemon Table Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://labs.testautomationph.com/table");
    });

test('Should show pokemon data in table', async ({ page }) => {
    const firstRow = page.locator('[data-testID^="pokemon-row-"]').first();
    await firstRow.waitFor({ state: 'visible' });
    await expect(firstRow).toBeVisible();

    const lastRow = page.locator('[data-testID^="pokemon-row-"]').last();
    await lastRow.waitFor({ state: 'visible' });
    await expect(lastRow).toBeVisible();

    const fifthRow = page.locator('[data-testID^="pokemon-row-"]').nth(4);
    await fifthRow.waitFor({ state: 'visible' });
    await expect(fifthRow).toBeVisible(); 
    const cells = await fifthRow.locator('td').allTextContents();
    const formattedOutput = cells.join(' | ');
    console.log('Row cells:', formattedOutput);
 
})


test('Should filter pokemon when searching', async ({ page }) => {
    await page.locator('[data-testid="search-input"]').fill('pikachu');

    const rows = page.locator('[data-testid^="pokemon-row"]');
    await rows.waitFor({ state: "visible"  });
    await expect(rows).toHaveCount(1);
    await expect(rows).toHaveText(/Pikachu/);

})

test('Should sort by name when header is clicked', async ({ page }) => {
    await page.locator('[data-testid="name-header"]').click('pikachu');

    const firstRow = page.locator('[data-testid^="pokemon-row"]').first();
    const firstName = await firstRow.locator('[data-testid^="name-cell"]').textContent();

    const lastRow = page.locator('[data-testid^="pokemon-row"]').last();
    const lastName = await lastRow.locator('[data-testid^="name-cell"]').textContent();

})
})








