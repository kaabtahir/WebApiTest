import { BasePage } from './basePage';
import { Locator, Page } from 'playwright';
import { ProductElements } from '../elements/productElements';

export default class ProductPage extends BasePage {
    private addToBasketButton: Locator;
    private bookPriceLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.addToBasketButton = this.page.locator(ProductElements.addToBasketButton);
        this.bookPriceLocator = this.page.locator(ProductElements.bookPrice);
    }

    async addToBasket() {
        await this.addToBasketButton.click();
    }

    async getBookPrice() {
        return await this.bookPriceLocator.textContent();
    }

    async assertBookExists() {
        const bookLocator = await this.page.locator('text=Thinking in HTML');
        return await bookLocator.isVisible();
    }
}