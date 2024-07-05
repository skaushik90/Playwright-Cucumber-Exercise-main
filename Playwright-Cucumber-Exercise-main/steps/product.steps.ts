import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('Select the cart', async () => {
  await new Product(getPage()).openCartPage();
});

Then('Sort the items by {string}', async (sort: string) => {
  await new Product(getPage()).sortPage(sort);
});

Then('Validate all 6 items are sorted correctly by {string}', async (sort: string) => {
  await new Product(getPage()).validateSort(sort);
});