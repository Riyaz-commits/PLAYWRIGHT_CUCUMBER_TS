/* import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, chromium } from 'playwright';


let page: Page;
let browser: Browser;



         Given('launch the sauce demo Application', {timeout:10*1000},async function() {

  const browser = await chromium.launch({
                headless: false
            });
            const context = await browser.newContext();
 const page =await context.newPage();
 page.goto("https://www.saucedemo.com/");



         });


         When('login with invalid credentials as {string} and {string}',async function (userName,password) {
         
        
          
             
            await  this.loginPage.loginApp(userName,password)
             //   await this.loginPage.getLoginPage(username, password); // Assuming login method exists
            
         });



         Then('it should fail to login', function () {
           
         });


 */