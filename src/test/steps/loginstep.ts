import {Given, When , Then, setDefaultTimeout} from "@cucumber/cucumber"
import {chromium, Browser, Expect, expect} from '@playwright/test'
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout( 60 * 1000 * 1);
  
  Given('user launches the url', async function () {
   

  await pageFixture.page.goto("https://automationexercise.com/login",{
    timeout: 7000});
  await pageFixture.page.waitForTimeout(5000);
  });

  Given('user logs into saucelabs with {string} and {string}', async function (username, email) {
    // Write code here that turns the phrase above into concrete actions

   await pageFixture.page.getByPlaceholder("Name").fill(username)
   await pageFixture.page.getByPlaceholder("Email Address").nth(1).fill(email);
  

  });

  Then('user logs into saucelabs successfully', async function () {
    // Write code here that turns the phrase above into concrete actions
   
    //await expect(page.getByRole("heading",{name:"Enter Account Information"})
    await pageFixture.page.getByRole("button",{name:"Signup"}).click()
    await expect(pageFixture.page.getByRole("heading",{name:"Enter Account Information"})).toBeVisible();
    await pageFixture.page.screenshot({ path: 'screenshotaug20.png', fullPage: true });


  });