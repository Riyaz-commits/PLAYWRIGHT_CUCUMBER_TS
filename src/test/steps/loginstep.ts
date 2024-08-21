import {Given, When , Then, setDefaultTimeout} from "@cucumber/cucumber"
import {chromium, Browser, Expect, expect} from '@playwright/test'
import { fixture } from "../../hooks/pageFixture";

setDefaultTimeout( 60 * 1000 * 1);
  
  Given('user launches the url', async function () {
   

  await fixture.page.goto(process.env.BASEURL,{
    //"https://automationexercise.com/login
    timeout: 7000});
  await fixture.page.waitForTimeout(5000);
  fixture.logger.info("launched the browser with url "+process.env.BASEURL)
  });

  Given('user logs into saucelabs with {string} and {string}', async function (username, email) {
    // Write code here that turns the phrase above into concrete actions

   await fixture.page.getByPlaceholder("Name").fill(username)
   await fixture.page.getByPlaceholder("Email Address").nth(1).fill(email);
  fixture.logger.info("Successfully entered name and email in the portal")

  });

  Then('user logs into saucelabs successfully', async function () {
    // Write code here that turns the phrase above into concrete actions
   
    //await expect(page.getByRole("heading",{name:"Enter Account Information"})
    await fixture.page.getByRole("button",{name:"Signup"}).click()
    await expect(fixture.page.getByRole("heading",{name:"Enter Account Information"})).toBeVisible();
    await fixture.page.screenshot({ path: 'screenshotaug20.png', fullPage: true });
    fixture.logger.info("verified the heading as Enter Account Information")


  });