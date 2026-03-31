import { test, expect } from '../../fixtures/auth.fixture';
import { LoginPage } from '../../pages/login.page';

test('Login + Logo Validation', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.verifyLogo();

  await login.login('standard_user', 'secret_sauce');
  await page.waitForTimeout(5000); // intentionally bad
  await expect(page).toHaveURL(/inventory/);
});

test('inventory visible', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/inventory/);
});