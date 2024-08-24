/* import { expect, Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LoginPage {
   


    userName : Locator;
    password: Locator;
    loginButton: Locator;
    page: Page;
  
      constructor(page: Page)
      {
        this.page = page;
  
          this.userName = page.locator("#user-name")
         
          this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
      }
  
  
     async loginApp(userNameValue: string,passWordValue: string)
      {
         await this.userName.fill(userNameValue);
         await this.page.pause();
  
  await this.password.fill(passWordValue)
  await this.loginButton.click();
  
      }
  
     
  }
  
  module.exports = {LoginPage}; */