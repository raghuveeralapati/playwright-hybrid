// fixtures/auth.fixture.ts
import { test as base, expect } from '@playwright/test';

export const test = base.extend({
  loggedInPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[placeholder="Username"]', 'standard_user');
    await page.fill('[placeholder="Password"]', 'secret_sauce');
    await page.click('text=Login');

    await use(page);
  }
});

// 🔥 ADD THIS LINE
export { expect };