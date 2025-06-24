import * as fs from 'fs';
import * as path from 'path';
import { advancedTest } from './advancedFixtures';
import { test } from './baseTest';
import type { AppointmentData } from './pages/DetailsPage';

// Load fixture data for parametrized tests
const fixturesPath = path.join(__dirname, 'fixtures', 'appointment-fixtures.json');
const fixtureData = JSON.parse(fs.readFileSync(fixturesPath, 'utf-8'));

test.describe('Parametrized Tests with Fixtures', () => {
  // Data-driven test using fixtures
  for (const [userKey, userData] of Object.entries(fixtureData.users)) {
    test(`Book appointment for ${(userData as AppointmentData).firstName} ${(userData as AppointmentData).lastName} (${userKey})`, async ({ 
      homePage, 
      appointmentPage, 
      detailsPage, 
      confirmationPage 
    }) => {
      const typedUserData = userData as AppointmentData;
      await homePage.goto();
      await homePage.enterZipAndCheck(typedUserData.zip);
      await appointmentPage.selectEarliestAppointment();
      await detailsPage.fillDetails(typedUserData);
      await detailsPage.submit();
      await confirmationPage.verifyConfirmation(typedUserData.email);
      await confirmationPage.verifySaveToAccountAndDetails();
    });
  }
});

test.describe('Test Scenarios from Fixtures', () => {
  // Test scenarios defined in fixture data
  for (const scenario of fixtureData.testScenarios) {
    test(`${scenario.name}: ${scenario.description}`, async ({ 
      homePage, 
      appointmentPage, 
      detailsPage, 
      confirmationPage 
    }) => {
      const userData = fixtureData.users[scenario.user] as AppointmentData;
      
      await homePage.goto();
      await homePage.enterZipAndCheck(userData.zip);
      await appointmentPage.selectEarliestAppointment();
      await detailsPage.fillDetails(userData);
      await detailsPage.submit();
      await confirmationPage.verifyConfirmation(userData.email);
      await confirmationPage.verifySaveToAccountAndDetails();
    });
  }
});

advancedTest.describe('Advanced Fixture Tests', () => {
  advancedTest('Test with pre-booked appointment', async ({ 
    bookedAppointment, 
    cleanupBooking 
  }) => {
    // This test starts with an already booked appointment
    console.log(`Working with pre-booked appointment for: ${bookedAppointment.userData.firstName} ${bookedAppointment.userData.lastName}`);
    console.log(`Confirmation email sent to: ${bookedAppointment.confirmationEmail}`);
    
    // Test logic here - maybe verify booking details, modify booking, etc.
    // The booking was already created by the fixture
  });
});
