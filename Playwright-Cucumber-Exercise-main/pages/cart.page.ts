import { Page } from "@playwright/test"

export class Cart {
    private readonly page: Page
    private readonly checkout: string = 'button[id="checkout"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCheckout() {
        await this.page.locator(this.checkout).click()
    }
}