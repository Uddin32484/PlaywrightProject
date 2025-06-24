# Playwright Fixtures Guide

This project demonstrates various approaches to using Playwright Fixtures for test automation.

## Project Structure

```
tests/
├── fixtures/
│   └── appointment-fixtures.json    # Centralized test data
├── pages/                          # Page Object Models
├── baseTest.ts                     # Core fixture definitions
├── advancedFixtures.ts            # Advanced fixtures with setup/teardown
├── appointment-booking-fixtures.spec.ts    # Basic fixture usage
├── parametrized-fixtures.spec.ts          # Data-driven tests with fixtures
└── gotjunk-appointment.spec.ts            # Updated original test
```

## Fixture Types Implemented

### 1. **Page Object Fixtures** (`baseTest.ts`)
- Automatically instantiate page objects for each test
- Available fixtures: `homePage`, `appointmentPage`, `detailsPage`, `confirmationPage`

### 2. **Data Fixtures** (`baseTest.ts`)
- **Specific User Fixtures**: `johnDoeData`, `janeSmithData`, `mikeJohnsonData`
- **Dynamic Data Fixture**: `appointmentData` (selects user based on test title)
- **Override Fixture**: `testUser` (can be overridden per test)

### 3. **Advanced Fixtures** (`advancedFixtures.ts`)
- **Setup/Teardown Fixtures**: `bookedAppointment` (pre-books appointment)
- **Cleanup Fixtures**: `cleanupBooking` (cleanup after test)

## Usage Examples

### Basic Fixture Usage
```typescript
test('Book appointment', async ({ 
  homePage, 
  appointmentPage, 
  detailsPage, 
  confirmationPage, 
  johnDoeData 
}) => {
  await homePage.goto();
  await homePage.enterZipAndCheck(johnDoeData.zip);
  // ... rest of test
});
```

### Dynamic Data Fixture
```typescript
test('Book appointment for Jane Smith', async ({ 
  appointmentData  // Automatically selects Jane's data based on test title
}) => {
  // Test logic using appointmentData
});
```

### Advanced Fixtures with Setup
```typescript
advancedTest('Test with pre-booked appointment', async ({ 
  bookedAppointment,  // Appointment is already booked before test starts
  cleanupBooking      // Cleanup happens after test
}) => {
  // Test logic with pre-existing booking
});
```

### Parametrized Tests
```typescript
// Data-driven tests using fixture data
for (const [userKey, userData] of Object.entries(fixtureData.users)) {
  test(`Book appointment for ${userData.firstName}`, async ({ 
    homePage, appointmentPage, detailsPage, confirmationPage 
  }) => {
    // Test logic for each user
  });
}
```

## Benefits of This Approach

1. **Reusability**: Fixtures can be reused across multiple tests
2. **Maintainability**: Centralized test data and page objects
3. **Scalability**: Easy to add new fixtures and test scenarios
4. **Type Safety**: Full TypeScript support with proper typing
5. **Setup/Teardown**: Automatic setup and cleanup capabilities
6. **Data Management**: Structured approach to test data management

## Running Tests

```bash
# Run all fixture-based tests
npx playwright test appointment-booking-fixtures.spec.ts

# Run parametrized tests
npx playwright test parametrized-fixtures.spec.ts

# Run advanced fixture tests
npx playwright test parametrized-fixtures.spec.ts --grep "Advanced Fixture Tests"

# Run original data-driven test (now using fixtures)
npx playwright test gotjunk-appointment.spec.ts
```

## Key Improvements Over Original Approach

1. **Eliminated Duplicate Data**: Consolidated `gotjunk-appointment-data.json` into `fixtures/appointment-fixtures.json`
2. **Added Type Safety**: Proper TypeScript interfaces for all fixtures
3. **Improved Test Organization**: Clear separation of concerns
4. **Enhanced Reusability**: Multiple ways to access the same data
5. **Better Test Isolation**: Each test gets fresh fixture instances
6. **Setup/Teardown Support**: Advanced fixtures for complex scenarios

## Best Practices Demonstrated

- Use specific fixtures for known test scenarios
- Use dynamic fixtures for flexible test data selection
- Implement setup/teardown fixtures for complex test scenarios
- Maintain centralized test data in JSON format
- Use TypeScript interfaces for type safety
- Create parametrized tests for data-driven scenarios
