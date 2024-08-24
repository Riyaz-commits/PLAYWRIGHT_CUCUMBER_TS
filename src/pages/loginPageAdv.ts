import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPageAdv {

    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
      
    }

    private Elements = {
        email: "Email Address",
        password: "Password",
   
    }

    async tryNavigateToHomePage() {
        await this.base.goto(process.env.BASEURL)
    }


    async registerUser(email: string, password: string) {
        
        await this.page.getByPlaceholder(this.Elements.email).fill(email)
        await this.page.getByPlaceholder(this.Elements.password).fill(password)
    
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
}

