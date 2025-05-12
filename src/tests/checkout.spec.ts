import { test } from '@playwright/test';
import { CartPage } from '../pages/cartPage';
import { HomePage } from '../pages/homePage';

test.describe('Checkout Process', () => {
    let cartPage: CartPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
          homePage = new HomePage(page);
            cartPage = new CartPage(page);
            await homePage.navigateTo();
    });

    test('Proceed to Checkout and assert Billing Details form is displayed', async () => {
         // Click on Add to Basket
        await homePage.addToBasket();

        // Click on Shopping Cart
        await homePage.navigateToCart();

        // Assert item added to cart with details
        await cartPage.assertItemInCart('Thinking in HTML', '₹400.00');

        // Click on Shopping Cart
        await cartPage.proceedToCheckout();

        // Assert that the billing form is visible
        await cartPage.assertBillingDetails();
        
    });
});