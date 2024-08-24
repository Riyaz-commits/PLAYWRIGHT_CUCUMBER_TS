import { Given, When, Then } from "@cucumber/cucumber";
import LoginPageAdv from "../../pages/loginPageAdv";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import * as data from "../../helper/util/test-data/registerUser.json";

let loginPage: LoginPageAdv;
let assert: Assert;

Given('I navigate to the register page', async function () {
  loginPage = new LoginPageAdv(fixture.page);
    assert = new Assert(fixture.page);
    await loginPage.tryNavigateToHomePage();
});

When('I created a new user', async function () {
   // const username = data.userName + Date.now().toString();
    await loginPage.registerUser(data.email, data.password);
});

Then('I confirm user registration is failed', async function () {
    await assert.assertURL(process.env.BASEURL);
});



