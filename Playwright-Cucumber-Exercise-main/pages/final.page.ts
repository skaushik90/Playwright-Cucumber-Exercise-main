import { Page } from "@playwright/test"

export class Final {
    private readonly page: Page
    private readonly msg: string = 'h2[class="complete-header"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async validateMessage(message: string) {
        const pageHeader = await this.page.locator(this.msg).textContent()
        if (pageHeader !== message) {
          throw new Error(`Expected final message to be ${message} but found ${pageHeader}`);
        }
    }
}