import { BasePage } from './basePage';
import { Locator, Page } from 'playwright';
import { expect } from '@playwright/test';
import { HomeElements } from '../elements/homeElements';

export class HomePage extends BasePage {
    private bookLocator: Locator;
    private bookPriceLocator: Locator;
    private addToBasketButton: Locator;
    private cartElement: Locator;

    constructor(page: Page) {
        super(page);
        this.bookLocator = this.page.locator(HomeElements.bookLocator);
        this.bookPriceLocator = this.page.locator(HomeElements.bookPriceLocator);
        this.addToBasketButton = this.page.locator(HomeElements.addToBasketButton).getByRole('link', { name: 'Add to basket' });
        this.cartElement = this.page.locator(HomeElements.cartElement);
    }

    async assertBookExists() {
        // Assert that the book is visible
        await expect(this.bookLocator).toBeVisible();
        // Assert that the book's text matches the expected value
        await expect(this.bookLocator).toHaveText('Thinking in HTML');
        // Assert that the book's price matches the expected value
        await expect(this.bookPriceLocator).toHaveText('₹400.00');
    }

    async navigateToProduct() {
        await this.bookLocator.click();
    }

    async addToBasket(): Promise<void> {
        await this.addToBasketButton.click();
        await this.page.waitForTimeout(5000);
        
    }

    async navigateToCart(): Promise<void> {
        await this.cartElement.click();
    }
}