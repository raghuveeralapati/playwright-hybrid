import { defineConfig } from "@playwright/test";

export default defineConfig({
	reporter: [["html"], ["list"]],
	testDir: "./tests",
	retries: 1,
	workers: 3,
	use: {
		baseURL: process.env.BASE_URL || "https://www.saucedemo.com",
		headless: true,
		screenshot: "only-on-failure",
		trace: "on-first-retry",
	},
	projects: [
		{ name: "chromium", use: { browserName: "chromium" } },
		{ name: "firefox", use: { browserName: "firefox" } },
		// Safari on macOS (WebKit)
		//	{ name: "webkit", use: { browserName: "webkit" } },
		// Mobile emulation (future-ready)
		//	{ name: "iPhone13", use: { ...devices["iPhone 13"] } },
	],
});
