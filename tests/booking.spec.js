import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { InsurancePage } from '../pages/InsurancePage';
import { PaymentPage } from '../pages/PaymentPage';

test('End-to-end booking with insurance', async ({ page }) => {
  const home = new HomePage(page);
  const insurance = new InsurancePage(page);
  const payment = new PaymentPage(page);

  await home.goTo();
  await home.searchFlight('KUL', 'SIN');

  await page.click('.select-flight-btn');

  await insurance.selectInsurance();

  await page.fill('#name', 'Test User');
  await page.fill('#passport', 'A1234567');

  await page.click('#proceed-payment');

  await payment.pay();
  await payment.verifyBookingSuccess();
});