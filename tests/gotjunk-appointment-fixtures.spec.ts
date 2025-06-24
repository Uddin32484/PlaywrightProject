import { test } from './baseTest';

test.describe('1-800-GOT-JUNK? appointment booking with fixtures', () => {
  
  test('Booking for John Doe with fixtures', async ({ homePage, appointmentPage, detailsPage, confirmationPage, appointmentData }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(appointmentData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(appointmentData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(appointmentData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

  test('Booking for Jane Smith with fixtures', async ({ homePage, appointmentPage, detailsPage, confirmationPage, appointmentData }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(appointmentData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(appointmentData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(appointmentData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

  test('Booking for Mike Johnson with fixtures', async ({ homePage, appointmentPage, detailsPage, confirmationPage, appointmentData }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(appointmentData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(appointmentData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(appointmentData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

});
