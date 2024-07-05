import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { CheckoutFinal } from '../pages/checkoutFinal.page';

Then('Select Finish', async () => {
  await new CheckoutFinal(getPage()).selectFinish();
});