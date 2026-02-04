const { test, expect } = require('@playwright/test');

test('min första test - kolla google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});