import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('petr');
  await page.locator('.submit-btn').click();
  await expect(page.locator('#swal2-title')).toContainText('Error');
  await page.getByRole('button', { name: 'OK' }).click();
});