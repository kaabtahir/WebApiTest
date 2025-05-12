export class BasePage {
    public page: any;

    constructor(page: any) {
        this.page = page;
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async waitForElement(selector: string) {
        await this.page.waitForSelector(selector);
    }
}