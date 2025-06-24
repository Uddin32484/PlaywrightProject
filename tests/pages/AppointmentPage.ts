import { Locator, Page } from '@playwright/test';

export class AppointmentPage {
  readonly page: Page;
  readonly enterDetailsBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.enterDetailsBtn = page.getByRole('button', { name: /ENTER PICK-UP DETAILS/i });
  }

  async selectEarliestAppointment() {
    await this.enterDetailsBtn.click();
  }
}
