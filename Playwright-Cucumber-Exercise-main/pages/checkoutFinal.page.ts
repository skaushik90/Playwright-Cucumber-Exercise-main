import { Page } from "@playwright/test"

export class CheckoutFinal {
    private readonly page: Page
    private readonly finish: string = 'button[id="finish"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async selectFinish(){
        await this.page.locator(this.finish).click()
    }
}