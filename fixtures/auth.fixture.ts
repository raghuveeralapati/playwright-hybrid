import { test as base, expect, type Page } from "@playwright/test";

type AuthFixtures = {
	loggedInPage: Page;
};

export const test = base.extend<AuthFixtures>({
	loggedInPage: async ({ page }, use) => {
		await page.goto("https://www.saucedemo.com/");
		await page.fill('[placeholder="Username"]', "standard_user");
		await page.fill('[placeholder="Password"]', "secret_sauce");
		await page.click("text=Login");

		await use(page);
	},
});

export { expect };
