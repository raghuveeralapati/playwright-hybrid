# Playwright Hybrid Test Framework

A generic hybrid test automation starter framework built with [Playwright](https://playwright.dev/) and TypeScript. Use this as a foundation for any web application — covering both **UI** and **API** tests out of the box, structured around the **Page Object Model (POM)** pattern.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) | Browser automation & API testing |
| TypeScript | Strongly typed test code |
| [Biome](https://biomejs.dev/) | Linting & formatting |
| Node.js | Runtime environment |

---

## Project Structure

```
sample-project/
├── api/
│   └── base.api.ts          # Base API client using Playwright's APIRequestContext
├── config/
│   └── env.ts               # Environment configuration
├── fixtures/
│   └── auth.fixture.ts      # Custom fixtures (e.g. pre-authenticated page)
├── pages/
│   ├── base.page.ts         # BasePage class with shared navigation helpers
│   └── login.page.ts        # LoginPage POM — login actions & assertions
├── tests/
│   ├── api/
│   │   └── health.api.spec.ts   # API health check test
│   └── ui/
│       └── login.spec.ts        # UI login & inventory tests
├── utils/
│   └── test-data.ts         # Shared test data (users, credentials)
├── biome.json               # Biome linter/formatter config
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

---

## Installation

```bash
npm install
npx playwright install
```

---

## Configuration

Set the `BASE_URL` environment variable to point the framework at your application:

```bash
BASE_URL=https://your-app.com npx playwright test
```

If `BASE_URL` is not set, it falls back to the value defined in `playwright.config.ts`. Update that default to match your target environment.

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run UI tests only

```bash
npx playwright test tests/ui
```

### Run API tests only

```bash
npx playwright test tests/api
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
```

### Interactive UI mode

```bash
npx playwright test --ui
```

---

## Viewing Reports

After a test run, open the HTML report:

```bash
npx playwright show-report
```

---

## Linting & Formatting

This project uses [Biome](https://biomejs.dev/) for linting and formatting.

```bash
# Check for lint/format issues
npx biome check .

# Auto-fix issues
npx biome check --write .
```

---

## Architecture

### Page Object Model (POM)

All UI interactions are encapsulated in page classes under `pages/`:

- **`BasePage`** — shared `goto()` helper wrapping `page.goto()`
- **`LoginPage`** — extends `BasePage`; provides `open()`, `login()`, and `verifyLogo()`

### Fixtures

Custom Playwright fixtures live in `fixtures/auth.fixture.ts`:

- **`loggedInPage`** — a `Page` fixture that logs in before handing control to the test

### API Layer

`api/base.api.ts` exposes a `BaseAPI` class using Playwright's `APIRequestContext` for making HTTP requests.

### Test Data

Shared test credentials and data are centralised in `utils/test-data.ts`.

---

## Playwright Configuration Highlights

| Setting | Value |
|---|---|
| `baseURL` | Configured via `BASE_URL` env var or `playwright.config.ts` |
| `retries` | 1 |
| `workers` | 3 |
| `headless` | `true` |
| `screenshot` | `only-on-failure` |
| `trace` | `on-first-retry` |
| Browsers | Chromium, Firefox |

---

## Getting Started with Your Own App

This framework is application-agnostic. To adapt it:

1. Set `BASE_URL` in your environment or update the default in `playwright.config.ts`
2. Add your page objects under `pages/`
3. Store reusable credentials and test data in `utils/test-data.ts`
4. Extend `fixtures/auth.fixture.ts` with your own authentication flow
5. Add API helpers to `api/` using the existing `BaseAPI` as a base class
6. Write tests under `tests/ui/` and `tests/api/`
