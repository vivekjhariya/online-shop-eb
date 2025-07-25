# 🧪 Testing Guide

_Last updated: 2025-07-25_

## Overview

This project includes a comprehensive testing setup for Jenkins CI/CD pipeline with multiple testing layers:

- **Unit Tests** - Component and function testing
- **Integration Tests** - Feature workflow testing
- **E2E Tests** - Full user journey testing
- **Performance Tests** - Load and response time testing
- **Security Tests** - Vulnerability scanning

## ⚙️ Test Setup

### Dependencies Installed:
- **Vitest** - Fast unit test runner
- **React Testing Library** - Component testing utilities
- **Playwright** - E2E testing framework
- **Jest DOM** - Additional DOM matchers

### Configuration Files:
- `vitest.config.js` - Unit test configuration
- `playwright.config.js` - E2E test configuration
- `src/test/setup.js` - Test environment setup

## 🚀 Running Tests

### Local Development:
```bash
npm run test           # Unit tests
npm run test:watch     # Watch mode
npm run test:coverage  # Coverage
npm run test:e2e       # E2E tests
npm run ci:test        # Full CI suite
```

### Production / CI:
```bash
# Run all tests and generate reports
npm run ci:test
```

## 📊 Test Coverage
- **Thresholds:** 70% (branches, functions, lines, statements)
- **Reports:**
  - HTML: `coverage/index.html`
  - LCOV: `coverage/lcov.info`
  - JUnit: `test-results.xml`

## 🏭 Production Test Reporting
- Jenkins pipeline publishes:
  - ESLint report
  - Coverage report
  - E2E test report
  - Performance metrics
- Reports are archived as build artifacts for review.

## 🧐 Interpreting Test Results in Production
- **Coverage < 70%:** Review and add missing tests.
- **E2E Failures:** Check Playwright report for failed user journeys.
- **Security Warnings:** Review npm audit and Docker scan results.
- **Performance Issues:** Review response time metrics in Jenkins.

## 🏆 Best Practices
- Write tests for all new features
- Maintain high coverage
- Use CI/CD for automated testing
- Review reports after every build
- Fix failures before deploying to production

---
