import { BasePage } from './basePage';
import { Locator, Page } from 'playwright';
import { expect } from '@playwright/test';
import { CartElements } from '../elements/cartElements';

export class CartPage extends BasePage {
        private bookTitleLocator: Locator;
        private bookPriceLocator: Locator; 
        private checkoutButtonSelector: Locator
        private billingFormElement: Locator;
    
        constructor(page: Page) {
            super(page);
            this.bookTitleLocator = this.page.locator(CartElements.bookTitle);
            this.bookPriceLocator = this.page.getByText('₹400.00').nth(1);
            this.checkoutButtonSelector = this.page.getByRole('link', { name: 'Proceed to Checkout' });
            this.billingFormElement = this.page.locator(CartElements.billingForm);
        }

    async assertItemInCart(bookTitle: string, bookPrice: string) {
        // Assert that the book title is visible in the cart
        console.log('Waiting for the results table to become visible...');
        await this.waitForElement(CartElements.bookTitle);
        await expect(this.bookTitleLocator).toBeVisible();
        await expect(this.bookTitleLocator).toHaveText(bookTitle);

        // Assert that the book price is visible in the cart
        await expect(this.bookPriceLocator).toBeVisible();
        await expect(this.bookPriceLocator).toHaveText(bookPrice);
    }

    async proceedToCheckout() {
        // Click on the Proceed to Checkout button
        await this.checkoutButtonSelector.click();
    }

    async assertBillingDetails() {
        // Assert that the book title is visible in the cart
        console.log('Waiting for the results table to become visible...');
        await this.waitForElement(CartElements.billingForm);
        await expect(this.billingFormElement).toBeVisible();

    }
}