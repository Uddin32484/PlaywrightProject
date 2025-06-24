import { test as base, expect } from '@playwright/test';
import * as fs from 'fs';
import path from 'path';
import { AppointmentPage } from './pages/AppointmentPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import type { AppointmentData } from './pages/DetailsPage';
import { DetailsPage } from './pages/DetailsPage';
import { HomePage } from './pages/HomePage';

// Load fixture data
const fixturesPath = path.join(__dirname, 'fixtures', 'appointment-fixtures.json');
const fixtureData = JSON.parse(fs.readFileSync(fixturesPath, 'utf-8'));

// Define fixture types
export interface TestFixtures {
  homePage: HomePage;
  appointmentPage: AppointmentPage;
  detailsPage: DetailsPage;
  confirmationPage: ConfirmationPage;
  appointmentData: AppointmentData;
  johnDoeData: AppointmentData;
  janeSmithData: AppointmentData;
  mikeJohnsonData: AppointmentData;
  testUser: AppointmentData;
}

export const test = base.extend<TestFixtures>({
  // Page Object Fixtures
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  appointmentPage: async ({ page }, use) => {
    const appointmentPage = new AppointmentPage(page);
    await use(appointmentPage);
  },

  detailsPage: async ({ page }, use) => {
    const detailsPage = new DetailsPage(page);
    await use(detailsPage);
  },

  confirmationPage: async ({ page }, use) => {
    const confirmationPage = new ConfirmationPage(page);
    await use(confirmationPage);
  },

  // Specific User Data Fixtures
  johnDoeData: async ({}, use) => {
    await use(fixtureData.users.johnDoe);
  },

  janeSmithData: async ({}, use) => {
    await use(fixtureData.users.janeSmith);
  },

  mikeJohnsonData: async ({}, use) => {
    await use(fixtureData.users.mikeJohnson);
  },

  // Dynamic appointment data based on test context
  appointmentData: async ({}, use, testInfo) => {
    // Determine which user data to use based on test title
    let userData;
    const title = testInfo.title.toLowerCase();
    
    if (title.includes('jane') || title.includes('smith')) {
      userData = fixtureData.users.janeSmith;
    } else if (title.includes('mike') || title.includes('johnson')) {
      userData = fixtureData.users.mikeJohnson;
    } else {
      userData = fixtureData.users.johnDoe;
    }
    
    await use(userData);
  },

  // Test user fixture that can be overridden per test
  testUser: async ({ johnDoeData }, use) => {
    await use(johnDoeData); // Default to John Doe
  },
});

export { expect };
