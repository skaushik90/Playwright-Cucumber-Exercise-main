import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Cart } from '../pages/cart.page';

Then('Select Checkout', async () => {
  await new Cart(getPage()).selectCheckout();
});
