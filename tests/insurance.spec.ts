import { test } from '@playwright/test';
import { InsurancePage } from '../pages/InsurancePage';

test('Toggle insurance selection', async ({ page }) => {
  await page.goto('https://example-airline.com');

  const insurance = new InsurancePage(page);

  await page.click('.select-flight-btn');

  await insurance.selectInsurance();
  await insurance.removeInsurance();
});