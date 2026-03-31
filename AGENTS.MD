# Playwright Test Generator Agent

## Goal
Generate clean Playwright tests using POM

## Rules
- Prefer getByRole / getByPlaceholder
- No waitForTimeout
- Use expect() assertions
- Follow Page Object Model
- Add URL validation
- Always assert (URL or UI)
- Avoid brittle selectors

## Output
- TypeScript
- Reusable POM-based tests