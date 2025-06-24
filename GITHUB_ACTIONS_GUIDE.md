# GitHub Actions CI/CD Setup Guide

This project is configured with comprehensive GitHub Actions workflows for automated testing and quality assurance.

## 🚀 Workflows Overview

### 1. **Playwright Tests** (`.github/workflows/playwright.yml`)
- **Triggers**: Push to main/develop, Pull requests, Daily schedule (2 AM UTC), Manual dispatch
- **Features**:
  - Multi-browser testing (Chromium, Firefox, WebKit)
  - Multi-Node.js version testing (18.x, 20.x)
  - Parallel test execution
  - Automatic retry on CI
  - HTML reports generation
  - GitHub Pages deployment for reports

### 2. **Code Quality & Security** (`.github/workflows/code-quality.yml`)
- **Triggers**: Push to main/develop, Pull requests
- **Features**:
  - TypeScript compilation check
  - Playwright configuration validation
  - Security vulnerability scanning
  - Dependency audit
  - License compliance check
  - Sensitive data detection

## 🛠️ Setup Instructions

### Step 1: Enable GitHub Actions
1. Go to your repository settings
2. Navigate to "Actions" → "General"
3. Ensure "Allow all actions and reusable workflows" is selected

### Step 2: Enable GitHub Pages (Optional)
For automatic test report hosting:
1. Go to repository "Settings" → "Pages"
2. Select "GitHub Actions" as source
3. Reports will be available at: `https://username.github.io/repository-name/`

### Step 3: Configure Secrets (If needed)
If you need to add environment variables or secrets:
1. Go to "Settings" → "Secrets and variables" → "Actions"
2. Add repository secrets as needed

## 📊 Workflow Details

### Matrix Strategy
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
    browser: [chromium, firefox, webkit]
```
This creates **6 parallel jobs** testing all combinations.

### Artifacts
- **Test Reports**: HTML reports for each browser/Node.js combination
- **Test Results**: Raw test results and screenshots
- **Retention**: 30 days for debugging

### Triggers
```yaml
on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
  workflow_dispatch:     # Manual trigger
```

## 🎯 Available Scripts

The following npm scripts are available for CI/CD:

```bash
# Basic test commands
npm run test                # Run all tests
npm run test:chromium      # Run tests on Chromium only
npm run test:firefox       # Run tests on Firefox only
npm run test:webkit        # Run tests on WebKit only

# CI-specific commands
npm run ci:test            # Run tests with GitHub reporter
npm run ci:install         # Install dependencies and browsers

# Test categories
npm run test:fixtures      # Run fixture-based tests
npm run test:parametrized  # Run parametrized tests
npm run test:legacy        # Run legacy tests

# Utilities
npm run test:list          # List all available tests
npm run report             # Open test report
npm run install:browsers   # Install Playwright browsers
```

## 📈 Monitoring & Reports

### Test Results
- **GitHub Actions Tab**: View live test execution
- **Pull Request Checks**: Automatic status checks on PRs
- **Artifacts**: Download detailed reports from failed runs

### GitHub Pages Reports
- Automatic deployment of HTML reports
- Accessible at: `https://yourusername.github.io/PlaywrightProject/`
- Updated on every successful test run

### Notifications
- **Email**: GitHub will notify on workflow failures
- **Status Badges**: Add to README for build status
- **Slack/Teams**: Configure webhooks for team notifications

## 🔧 Customization

### Modify Test Schedule
Edit `.github/workflows/playwright.yml`:
```yaml
schedule:
  - cron: '0 8 * * 1-5'  # Weekdays at 8 AM UTC
```

### Add Environment Variables
Add to workflow files:
```yaml
env:
  TEST_ENV: production
  API_URL: https://api.example.com
```

### Change Browser Matrix
Modify the matrix in `.github/workflows/playwright.yml`:
```yaml
strategy:
  matrix:
    browser: [chromium, firefox]  # Remove webkit
```

## 🐛 Troubleshooting

### Common Issues

1. **Tests failing on CI but passing locally**
   - Check headless mode compatibility
   - Verify timing issues with `actionTimeout`
   - Review CI-specific environment differences

2. **Browser installation failures**
   - Ensure `--with-deps` flag is used
   - Check Ubuntu dependencies in workflow

3. **Report upload failures**
   - Verify artifact paths exist
   - Check workflow permissions

### Debug Steps
1. Enable debug logging:
   ```yaml
   env:
     DEBUG: pw:*
   ```

2. Use workflow dispatch for manual testing

3. Check artifact downloads for detailed logs

## 📋 Best Practices

1. **Branch Protection**: Enable required status checks
2. **Parallel Testing**: Utilize matrix strategy for faster feedback
3. **Artifact Management**: Regular cleanup of old artifacts
4. **Security**: Regular dependency updates and audits
5. **Monitoring**: Set up notifications for critical failures

## 🔗 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Playwright CI Guide](https://playwright.dev/docs/ci)
- [GitHub Pages Setup](https://docs.github.com/en/pages)

---

Your project is now fully configured for automated testing! 🎉
