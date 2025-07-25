import { test, expect } from '@playwright/test';

test('user can add product to cart and checkout', async ({ page }) => {
  await page.goto('/');
  // Assume first product has an 'Add to Cart' button
  await page.click('text=Add to Cart');
  // Open cart (assume cart icon or button is present)
  await page.click('text=Cart');
  // Check that product is in cart
  await expect(page.locator('text=Product')).toBeVisible();
  // Proceed to checkout
  await page.click('text=Checkout');
  // Check for checkout page content
  await expect(page.locator('text=Order Summary')).toBeVisible();
}); 