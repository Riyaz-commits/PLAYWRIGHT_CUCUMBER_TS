import { test as base } from "@playwright/test";
import LoginPage from "../pages/loginPage";

// Extend basic test by providing a two new fixtures (our page object pages)
export const test = base.extend<{
  loginpage : LoginPage;
}>({
  // Define a fixture. Note that it can use built-in fixture "page"
  loginpage: async ({ page }, use) => {
    await use(new LoginPage(page));
  }
});