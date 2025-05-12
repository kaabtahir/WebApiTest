import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';

test.describe('Add to Cart Tests', () => {
    let homePage: HomePage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
        await homePage.navigateTo();
    });

    test('Add Thinking in HTML book to cart', async () => {
        // Click on Add to Basket
        await homePage.addToBasket();

        // Click on Shopping Cart
        await homePage.navigateToCart();

        // Assert item added to cart with details
        await cartPage.assertItemInCart('Thinking in HTML', '₹400.00');

    });
});