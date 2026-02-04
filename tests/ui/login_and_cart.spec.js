const { test, expect } = require('@playwright/test');

test('Logga in och lägg till produkt i varukorgen', async ({ page }) => {
  // 1. Gå till demosidan
  await page.goto('https://www.saucedemo.com/');

  // 2. Logga in med demo-uppgifter
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. Verifiera att inloggningen lyckades genom att kolla rubriken
  await expect(page.locator('.title')).toHaveText('Products');

  // 4. Lägg till en ryggsäck i varukorgen
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 5. Kontrollera att varukorgen uppdateras till "1"
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});