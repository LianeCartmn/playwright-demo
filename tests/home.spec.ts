import { test, expect } from '@playwright/test';
import { HomePageObject } from '../pages/homePageObject'

test('home displaying properly', async ({ page }) => {
    const homepage = new HomePageObject(page);
    await homepage.goto();
    await expect(homepage.locators.mainTitle).toBeVisible();
});