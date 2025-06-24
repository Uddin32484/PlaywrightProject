import { Page } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async verifyConfirmation(email?: string) {
    await this.page.getByRole('heading', { name: /You\'re all set!/i }).waitFor();
    await this.page.getByText('Junk relief is on the way.').waitFor();
    await this.page.getByText('A confirmation email has been sent to').waitFor();
    if (email) {
      await this.page.getByRole('link', { name: email }).waitFor();
    }
  }

  async verifySaveToAccountAndDetails() {
    await this.page.getByRole('link', { name: /SAVE TO ACCOUNT/i }).waitFor();
    await this.page.getByRole('heading', { name: /Appointment details/i }).waitFor();
  }
}
