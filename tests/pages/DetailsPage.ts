import { Page } from '@playwright/test';

export interface AppointmentData {
  zip: string;
  address: string;
  unit: string;
  city: string;
  state: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export class DetailsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillDetails(data: AppointmentData) {
    await this.page.getByRole('radio', { name: 'Home' }).check();
    await this.page.locator('input[name="address"]').fill(data.address);
    await this.page.locator('input[name="unit"]').fill(data.unit);
    await this.page.locator('input[name="city"]').fill(data.city);
    await this.page.getByRole('combobox').selectOption({ label: data.state });
    await this.page.locator('input[name="firstName"]').fill(data.firstName);
    await this.page.locator('input[name="lastName"]').fill(data.lastName);
    await this.page.locator('input[name="email"]').fill(data.email);
    await this.page.locator('input[name="phoneNumber"]').fill(data.phone);
  }

  async submit() {
    await this.page.getByRole('button', { name: /Book Free Onsite Estimate/i }).click();
  }
}
