import { Page, expect } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly openCart: string = 'a[class="shopping_cart_link"]'
    private readonly sortDD: string = 'select[class="product_sort_container"]'
    private readonly itemCost: string = 'div[class="inventory_item"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }

    public async openCartPage() {
        await this.page.locator(this.openCart).click()
    }

    public async sortPage(sort: string) {
        const element = await this.page.locator(this.sortDD)
        await element.selectOption({label: sort});
    }

    public async validateSort(sort: string) {
        const elements = await this.page.$$(this.itemCost)
        const prices: number[] = []
        for(const element of elements)
        {
            const priceElement = await element.$('.inventory_item_price');
            if(priceElement){
            const priceText = await priceElement.textContent();
            if(priceText) {
                prices.push(parseFloat(priceText.slice(1)));
                }
            }
        }
        if (sort == 'Price (high to low)'){
            const isSortedDescending = prices.every((price, index) => index === 0 || price <= prices[index - 1]);
            expect(isSortedDescending).toBe(true)
        } else if(sort == 'Price (low to high)') {
            const isSortedAscending = prices.every((price, index) => index === 0 || price >= prices[index - 1]);
            expect(isSortedAscending).toBe(true)
        }
    }
}