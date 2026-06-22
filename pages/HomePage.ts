import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goTo() {
    await this.page.goto('/');
  }

  async searchFlight(from: string, to: string) {
    await this.page.fill('#from', from);
    await this.page.fill('#to', to);
    await this.page.click('#searchFlight');
  }
}