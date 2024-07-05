import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Final } from '../pages/final.page';

Then('Validate the text {string}', async (message: string) => {
  await new Final(getPage()).validateMessage(message);
});
