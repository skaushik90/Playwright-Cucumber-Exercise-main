import { Page } from "@playwright/test"

export class Checkout {
    private readonly page: Page
    private readonly firstNameTag: string = 'input[id="first-name"]'
    private readonly lastNameTag: string = 'input[id="last-name"]'
    private readonly postalCodeTag: string = 'input[id="postal-code"]'
    private readonly continueBtn: string = 'input[id="continue"]'
    private readonly firstName: string = 'Kaushik'
    private readonly lastName: string = 'Srinivasan'
    private readonly postalCode: string = '01234'

    constructor(page: Page) {
        this.page = page;
    }

    public async fillDetails() {
        await this.page.locator(this.firstNameTag).fill(this.firstName)
        await this.page.locator(this.lastNameTag).fill(this.lastName)
        await this.page.locator(this.postalCodeTag).fill(this.postalCode)        
    }
    public async selectContinue(){
        await this.page.locator(this.continueBtn).click()
    }
}