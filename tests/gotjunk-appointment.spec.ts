import * as fs from 'fs';
import path from 'path';
import { test } from './baseTest';
import type { AppointmentData } from './pages/DetailsPage';

// Load fixture data instead of separate data file
const fixturesPath = path.join(__dirname, 'fixtures', 'appointment-fixtures.json');
const fixtureData = JSON.parse(fs.readFileSync(fixturesPath, 'utf-8'));
const testData: AppointmentData[] = Object.values(fixtureData.users);

test.describe('1-800-GOT-JUNK? appointment booking POM flow (data-driven)', () => {
  for (const data of testData) {
    test(`Booking for ${data.firstName} ${data.lastName} (${data.zip})`, async ({ homePage, appointmentPage, detailsPage, confirmationPage }) => {
      await homePage.goto();
      await homePage.enterZipAndCheck(data.zip);
      await appointmentPage.selectEarliestAppointment();
      await detailsPage.fillDetails(data);
      await detailsPage.submit();
      await confirmationPage.verifyConfirmation(data.email);
      await confirmationPage.verifySaveToAccountAndDetails();
    });
  }
});