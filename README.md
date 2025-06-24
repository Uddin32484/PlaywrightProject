# Playwright Fixtures Test Project
# Created by Yub Uddin 06/22/2025 This AI MCP Based Project
A comprehensive Playwright test automation project demonstrating various fixture patterns and best practices for test organization and data management.

## 🚀 Features

- **Multiple Fixture Approaches**: Specific user fixtures, dynamic data fixtures, and advanced setup/teardown fixtures
- **Page Object Model**: Structured page objects for maintainable tests
- **Data-Driven Testing**: Parametrized tests using fixture data
- **Type Safety**: Full TypeScript support with proper interfaces
- **Centralized Test Data**: Structured JSON-based test data management
- **Advanced Test Organization**: Multiple test files demonstrating different patterns

## 📁 Project Structure

```
├── tests/
│   ├── fixtures/
│   │   └── appointment-fixtures.json    # Centralized test data
│   ├── pages/                          # Page Object Models
│   │   ├── HomePage.ts
│   │   ├── AppointmentPage.ts
│   │   ├── DetailsPage.ts
│   │   └── ConfirmationPage.ts
│   ├── baseTest.ts                     # Core fixture definitions
│   ├── advancedFixtures.ts            # Advanced fixtures with setup/teardown
│   ├── appointment-booking-fixtures.spec.ts    # Basic fixture usage examples
│   ├── parametrized-fixtures.spec.ts          # Data-driven tests with fixtures
│   └── gotjunk-appointment.spec.ts            # Legacy tests updated to use fixtures
├── playwright.config.ts               # Playwright configuration
├── package.json                       # Dependencies and scripts
└── README.md                          # This file
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mcpServerSetup-fixtures
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test Files
```bash
# Basic fixture examples
npx playwright test appointment-booking-fixtures.spec.ts

# Parametrized and data-driven tests
npx playwright test parametrized-fixtures.spec.ts

# Updated legacy tests
npx playwright test gotjunk-appointment.spec.ts
```

### Run Tests in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run Tests in Headed Mode
```bash
npx playwright test --headed
```

### Run Specific Test by Name
```bash
npx playwright test --grep "John Doe"
npx playwright test --grep "Advanced Fixture Tests"
```

## 📊 Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## 🎯 Fixture Types Demonstrated

### 1. Page Object Fixtures
Automatically instantiated page objects available in every test:
```typescript
test('example', async ({ homePage, appointmentPage, detailsPage, confirmationPage }) => {
  // Page objects ready to use
});
```

### 2. Data Fixtures
Multiple approaches to test data management:
```typescript
// Specific user fixtures
test('test with John', async ({ johnDoeData }) => { /* ... */ });

// Dynamic data selection based on test title
test('test for Jane Smith', async ({ appointmentData }) => { 
  // Automatically uses Jane's data
});
```

### 3. Advanced Fixtures
Setup and teardown capabilities:
```typescript
advancedTest('pre-booked test', async ({ bookedAppointment, cleanupBooking }) => {
  // Appointment already created before test starts
  // Cleanup happens automatically after test
});
```

## 📝 Test Data Structure

Test data is centrally managed in `tests/fixtures/appointment-fixtures.json`:

```json
{
  "users": {
    "johnDoe": { /* user data */ },
    "janeSmith": { /* user data */ },
    "mikeJohnson": { /* user data */ }
  },
  "locations": {
    "newYork": "10001",
    "sanFrancisco": "94105",
    "miami": "33101"
  },
  "testScenarios": [
    {
      "name": "Standard Booking",
      "description": "Regular appointment booking flow",
      "user": "johnDoe"
    }
  ]
}
```

## 🔧 Configuration

Key configuration in `playwright.config.ts`:
- **Timeout**: 60 seconds
- **Browsers**: Chrome, Firefox, Safari
- **Headless**: Disabled for debugging
- **Parallel**: Enabled for faster execution
- **Reports**: HTML reporter enabled

## 🧩 Key Test Scenarios

1. **Basic Fixture Usage**: Direct fixture injection
2. **Dynamic Data Selection**: Automatic user selection based on test context
3. **Parametrized Tests**: Data-driven tests for all users
4. **Scenario-Based Tests**: Tests based on predefined scenarios
5. **Advanced Setup/Teardown**: Complex fixture with pre-booking

## 📈 Benefits

- ✅ **Reusable**: Fixtures can be reused across multiple tests
- ✅ **Maintainable**: Centralized test data and page objects
- ✅ **Scalable**: Easy to add new fixtures and test scenarios
- ✅ **Type Safe**: Full TypeScript support with proper typing
- ✅ **Flexible**: Multiple ways to access and use test data
- ✅ **Organized**: Clear separation of concerns and test organization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🔗 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Fixtures Guide](https://playwright.dev/docs/test-fixtures)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

**Happy Testing Yub Uddin Project developed BY Yub Uddin !** 🎭
