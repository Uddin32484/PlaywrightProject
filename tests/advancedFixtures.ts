import { test as base } from './baseTest';
import type { AppointmentData } from './pages/DetailsPage';

// Extended fixtures with setup/teardown capabilities
export interface AdvancedFixtures {
  bookedAppointment: {
    userData: AppointmentData;
    confirmationEmail: string;
  };
  cleanupBooking: void;
}

export const advancedTest = base.extend<AdvancedFixtures>({
  // Fixture that automatically books an appointment before the test
  bookedAppointment: async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    johnDoeData 
  }, use) => {
    console.log('Setting up: Booking appointment before test');
    
    // Setup: Book an appointment
    await homePage.goto();
    await homePage.enterZipAndCheck(johnDoeData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(johnDoeData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(johnDoeData.email);
    
    const bookingData = {
      userData: johnDoeData,
      confirmationEmail: johnDoeData.email
    };
    
    // Provide the booking data to the test
    await use(bookingData);
    
    // Teardown: Clean up the booking (if needed)
    console.log('Tearing down: Cleaning up booking after test');
    // Add cleanup logic here if your application supports it
  },

  // Simple cleanup fixture
  cleanupBooking: async ({ page }, use) => {
    await use();
    
    // Cleanup after test
    console.log('Performing cleanup actions');
    // Clear cookies, local storage, etc.
    await page.context().clearCookies();
  },
});
