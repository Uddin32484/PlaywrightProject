import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly zipInput: Locator;
  readonly checkAvailabilityBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.zipInput = page.locator('#edit-home-banner-zipcode');
    this.checkAvailabilityBtn = page.locator('#check-availability-hero');
  }

  async goto() {
    await this.page.goto('https://www.1800gotjunk.com/us_en');
  }

  async enterZipAndCheck(zip: string) {
    await this.zipInput.fill(zip);
    await this.checkAvailabilityBtn.click();
  }
}
