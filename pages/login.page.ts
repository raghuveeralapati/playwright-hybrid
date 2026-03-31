import { expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
	async open() {
		await this.goto("/");
	}

	async verifyLogo() {
		await expect(this.page.locator(".login_logo")).toBeVisible();
	}

	async login(username: string, password: string) {
		await this.page.getByPlaceholder("Username").fill(username);
		await this.page.getByPlaceholder("Password").fill(password);
		await this.page.getByRole("button", { name: "Login" }).click();
	}
}
