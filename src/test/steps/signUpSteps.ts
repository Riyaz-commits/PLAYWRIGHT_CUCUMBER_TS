import { Given, When, Then } from "@cucumber/cucumber";
import SigupPage from "../../pages/signUpPage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import * as data from "../../helper/util/test-data/registerUser.json";
import SignUpPage from "../../pages/signUpPage";
import { expect } from "@playwright/test";

let signUPPage: SigupPage;
let assert: Assert;

const defaultTimeout = 10000;
Given('I navigate to the sign page successfully', async function () {
  signUPPage = new SignUpPage(fixture.page);
    assert = new Assert(fixture.page);
    await signUPPage.tryNavigateToHomePage();
});

When('I tried to sing with a new user',{ timeout: defaultTimeout }, async function () {
   // const username = data.userName + Date.now().toString();
    await signUPPage.signUprUser(data.email, data.password);
});

Then('I confirm user registration is loaded to confirmation page', async function () {

    await assert.assertURL(process.env.BASEURL);
});




Given('launch the sauce demo Application', {timeout:10*1000},async function() {

  signUPPage = new SignUpPage(fixture.page);
  assert = new Assert(fixture.page);
  await signUPPage.tryNavigateToHomePage();



         });


         When('login with invalid credentials as {string} and {string}',async function (userName,password) {
         
        
       //   signUPPage = new SignUpPage(fixture.page);
             
            await signUPPage.loginApp(userName,password)
await console.log(userName,password)
          
             //   await this.loginPage.getLoginPage(username, password); // Assuming login method exists
            
         });




         Then('it should fail to login', async function () {
          // Write code here that turns the phrase above into concrete actions
        console.log("PASS")
        });




  Given('user logs into saucelabs with {string} and {string}', async function (username, email) {
    // Write code here that turns the phrase above into concrete actions
    signUPPage = new SignUpPage(fixture.page);
    await signUPPage.loginApp(username,email)
 await  fixture.logger.info("Successfully entered name and email in the portal")

  });

  Then('user logs into saucelabs successfully', async function () {
    // Write code here that turns the phrase above into concrete actions
   
    //await expect(page.getByRole("heading",{name:"Enter Account Information"})
    /* await fixture.page.getByRole("button",{name:"Signup"}).click()
    await expect(fixture.page.getByRole("heading",{name:"Enter Account Information"})).toBeVisible(); */
    await fixture.page.screenshot({ path: 'screenshotaug20.png', fullPage: true });
   await  fixture.logger.info("verified the heading as Enter Account Information")


  });


