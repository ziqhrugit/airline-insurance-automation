# Airline Travel Insurance Automation (Playwright + TypeScript)

## Overview

This project is an end-to-end UI automation framework that validates the **travel insurance flow during airline flight booking**.

---

## Objective

To ensure that the travel insurance feature works correctly and reliably across the flight booking journey, including:

* Insurance selection and removal
* Price updates
* Booking confirmation
* Payment flow validation

---

## Test Scenarios Covered

### Core Booking Flow

* Search and select flight
* Add passenger details
* Select travel insurance
* Proceed to payment
* Complete booking

### Insurance Validation

* Insurance checkbox toggle (add/remove)
* Insurance reflected in booking summary
* Correct inclusion in confirmation page

### Negative Scenarios (mocked)

* Booking without insurance
* Removing insurance before payment
* Ensuring correct price recalculation

---

##  Tech Stack Used

* Playwright (UI Automation)
* TypeScript
* Node.js
* Page Object Model (POM)

---

##  Framework Design

This framework follows the **Page Object Model (POM)** design pattern:

* `pages/` → UI page abstractions
* `tests/` → test scenarios
* `utils/` → test data and helpers
* `playwright.config.ts` → framework configuration

This improves:

* Maintainability
* Reusability
* Scalability

---

## Project Structure

```
airline-insurance-automation/
│
├── tests/
│   └── booking.spec.ts
│
├── pages/
│   ├── HomePage.ts
│   ├── InsurancePage.ts
│   ├── PaymentPage.ts
│
├── utils/
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

##  Installation

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/booking.spec.ts
```

---

##  Test Reports

Generate and view HTML report:

```bash
npx playwright show-report
```

---

---

##  Author

Mohd Ziqhru Tarmizi
