import { test } from './baseTest';

test.describe('1-800-GOT-JUNK? Appointment Booking - Fixtures Approach', () => {
  
  // Test using specific user fixtures
  test('Book appointment for John Doe using specific fixture', async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    johnDoeData 
  }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(johnDoeData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(johnDoeData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(johnDoeData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

  test('Book appointment for Jane Smith using specific fixture', async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    janeSmithData 
  }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(janeSmithData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(janeSmithData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(janeSmithData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

  test('Book appointment for Mike Johnson using specific fixture', async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    mikeJohnsonData 
  }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(mikeJohnsonData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(mikeJohnsonData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(mikeJohnsonData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

  // Test using dynamic appointment data fixture
  test('Book appointment using dynamic fixture (John Doe)', async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    appointmentData 
  }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(appointmentData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(appointmentData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(appointmentData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

  test('Book appointment using dynamic fixture (Jane Smith)', async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    appointmentData 
  }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(appointmentData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(appointmentData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(appointmentData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });

  test('Book appointment using dynamic fixture (Mike Johnson)', async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    appointmentData 
  }) => {
    await homePage.goto();
    await homePage.enterZipAndCheck(appointmentData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(appointmentData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(appointmentData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });
});

test.describe('Fixture Override Examples', () => {
  // Example of overriding the testUser fixture
  test('Book appointment with custom user override', async ({ 
    homePage, 
    appointmentPage, 
    detailsPage, 
    confirmationPage, 
    testUser,
    janeSmithData
  }) => {
    // The test will use Jane Smith data instead of default John Doe
    const userData = janeSmithData;
    
    await homePage.goto();
    await homePage.enterZipAndCheck(userData.zip);
    await appointmentPage.selectEarliestAppointment();
    await detailsPage.fillDetails(userData);
    await detailsPage.submit();
    await confirmationPage.verifyConfirmation(userData.email);
    await confirmationPage.verifySaveToAccountAndDetails();
  });
});
