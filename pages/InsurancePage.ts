import { Page, expect } from '@playwright/test';

export class InsurancePage {
  constructor(private page: Page) {}

  async selectInsurance() {
    const checkbox = this.page.locator('#travel-insurance');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  async removeInsurance() {
    const checkbox = this.page.locator('#travel-insurance');
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
  }
}