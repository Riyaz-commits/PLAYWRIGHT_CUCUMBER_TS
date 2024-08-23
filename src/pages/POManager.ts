
import {Page} from '@playwright/test';
import  LoginPage  from '../pages/loginPage.ts'

export class POManager
{
    loginPage: LoginPage;
    page : Page;
 

constructor(page:Page)
{
    this.page = page;
    this.loginPage = new LoginPage(this.page);
  


}

getLoginPage()
{
    return this.loginPage;
}

getDemoCartSign()
{

    //return this.democartSignUpPage;
}

}


module.exports = {POManager};