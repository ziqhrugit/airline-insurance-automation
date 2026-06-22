import { Page, expect } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  async pay() {
    await this.page.click('#pay-now');
  }

  async verifyBookingSuccess() {
    await expect(this.page.locator('.confirmation'))
      .toContainText('Booking Confirmed');

    await expect(this.page.locator('.insurance'))
      .toContainText('Travel Insurance');
  }
}