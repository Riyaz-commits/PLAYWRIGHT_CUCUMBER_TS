import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class SignUpPage {

    
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
      
    }

    private Elements = {
        name: "Name",
        email: "Email Address",
        userName:"#user-name",
        password:"#password",
        loginButton:"[data-qa='signup-button']"

   
    }

    async tryNavigateToHomePage() {
        await this.base.goto(process.env.BASEURL)
    }


    async signUprUser(name: string, email: string) {
        
        await this.page.getByPlaceholder(this.Elements.name).fill(name)
        await this.page.getByPlaceholder(this.Elements.email).nth(1).fill(email)
        await this.page.locator(this.Elements.loginButton).click();
    
    }

    async signUprUserwithInvalid(name: string, email: string) {
        
        await this.page.getByPlaceholder(this.Elements.name).fill(name)
        await this.page.getByPlaceholder(this.Elements.email).fill("yaz@gmail.com")
        await this.page.locator(this.Elements.loginButton).click();

    }

    async enterUsername(userName: string) {
        await this.page.type(this.Elements.email, userName);
        const [response] = await Promise.all([
            this.page.waitForResponse(res => {
                return res.status() == 200
                    &&
                    res.url() == `https://bookcart.azurewebsites.net/api/user/validateUserName/${userName}`
            })
        ]);
        await response.finished();
    }

    async loginApp(userNameValue: string,passWordValue: string)
      {
  await this.page.getByPlaceholder(this.Elements.name).fill(userNameValue)
  await this.page.getByPlaceholder(this.Elements.email).nth(1).fill(passWordValue)
  await this.page.locator(this.Elements.loginButton).click();
      }
      
}

