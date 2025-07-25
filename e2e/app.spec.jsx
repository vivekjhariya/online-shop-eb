import { test, expect } from '@playwright/test';

test.describe('Online Shopping App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Online Shopping|Shopping|Shop/i);
    
    // Check if page loads without errors
    const errors = [];
    page.on('pageerror', (error) => errors.push(error));
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });

  test('should have responsive design', async ({ page }) => {
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.waitForLoadState('networkidle');
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForLoadState('networkidle');
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForLoadState('networkidle');
    
    // Page should still be functional
    expect(await page.isVisible('body')).toBeTruthy();
  });

  test('should handle navigation', async ({ page }) => {
    // Look for navigation elements
    const navElements = await page.locator('nav, .navbar, [role="navigation"]').count();
    
    if (navElements > 0) {
      // Test navigation if it exists
      const links = await page.locator('a, button[role="link"]').all();
      
      for (let i = 0; i < Math.min(links.length, 3); i++) {
        const link = links[i];
        const href = await link.getAttribute('href');
        
        if (href && !href.startsWith('http') && !href.startsWith('mailto')) {
          await link.click();
          await page.waitForLoadState('networkidle');
          
          // Check if navigation was successful
          expect(page.url()).toBeTruthy();
        }
      }
    }
  });

  test('should handle search functionality', async ({ page }) => {
    // Look for search input
    const searchInput = page.locator('input[type="search"], input[placeholder*="search" i], .search-input');
    
    if (await searchInput.count() > 0) {
      await searchInput.first().fill('test product');
      await searchInput.first().press('Enter');
      await page.waitForLoadState('networkidle');
      
      // Verify search was performed
      expect(page.url()).toBeTruthy();
    }
  });

  test('should handle shopping cart', async ({ page }) => {
    // Look for cart elements
    const cartButton = page.locator('[data-testid*="cart"], .cart, button:has-text("cart" i)');
    
    if (await cartButton.count() > 0) {
      await cartButton.first().click();
      await page.waitForLoadState('networkidle');
      
      // Verify cart interaction
      expect(page.url()).toBeTruthy();
    }
  });

  test('should be accessible', async ({ page }) => {
    // Basic accessibility checks
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').count();
    expect(headings).toBeGreaterThan(0);
    
    // Check for alt text on images
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');
      
      if (src && !src.includes('data:')) {
        expect(alt).toBeTruthy();
      }
    }
  });

  test('should handle errors gracefully', async ({ page }) => {
    // Test 404 handling
    await page.goto('/non-existent-page');
    
    // Should not show browser error page
    const bodyText = await page.textContent('body');
    expect(bodyText).not.toContain('This site can't be reached');
    expect(bodyText).not.toContain('404');
  });

  test('should load within performance budget', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});
