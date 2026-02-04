const { test, expect } = require('@playwright/test');

test('API - Hämta en lista med objekt', async ({ request }) => {
  // Vi anropar ett öppet gratis-API för att hämta data
  const response = await request.get('https://api.restful-api.dev/objects');
  
  // Kolla att servern svarar ok (status 200)
  expect(response.ok()).toBeTruthy();
  
  const body = await response.json();
  
  // Kolla att vi faktiskt fick en lista med saker tillbaka
  expect(body.length).toBeGreaterThan(0);
  console.log('Antal objekt hittade:', body.length);
});