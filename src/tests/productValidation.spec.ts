import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import ProductPage from '../pages/productPage';

test.describe('Product Validation Tests', () => {
    let homePage: HomePage;
    let productPage: ProductPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        await homePage.navigateTo();
    });

    test('Validate Thinking in HTML book exists with price', async () => {
        await homePage.assertBookExists();
        const price = await productPage.getBookPrice();
        expect(price).toBe('₹400.00');
    });
});