import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Checkout } from '../pages/checkout.page';

Then('Fill in the First Name, Last Name, and Zip\\/Postal Code', async () => {
  await new Checkout(getPage()).fillDetails();
});

Then('Select Continue', async () => {
  await new Checkout(getPage()).selectContinue();
});