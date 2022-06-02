const { test, expect } = require('@playwright/test');
  
test.describe('Product Health:', () => {
  test('Liveness Should Be OK', async ({ page }) => {
    const _response = await page.goto('/api/product/liveness');
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(await _response.json()).toMatchObject({
      code: 200,
      msg: 'ok'
    });
  });

  test('Readiness Should Be OK', async ({ page }) => {
    const _response = await page.goto('/api/product/readiness');
    expect(_response.status()).toBe(200);
    expect(_response.ok()).toBeTruthy();
    expect(await _response.json()).toMatchObject({
      code: 200,
      msg: 'ok'
    });
  });
})