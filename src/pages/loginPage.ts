import { expect, Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LoginPage {
   

    userName : Locator;
    password: Locator;
    loginButton: Locator;
    page: Page;
    base: any;
    Elements: any;
    constructor( page: Page) {
        this.page = page;
        this.userName = page.locator("#user-name")
        this.password = page.locator("#password");
      this.loginButton = page.locator("#login-button");
    }

   

    async navigateToLoginPage() {
        await this.page.goto("/login");
        await expect(this.page).toHaveTitle("BookCart");
    }
    async enterUserName(user: string) {
       await this.userName.fill(user);
    }
    async enterPassword(Password: string) {
        await this.password.fill(Password);
    }

    async clickLoginButton() {
        await this.Elements.loginBtn;
    }

    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }


}