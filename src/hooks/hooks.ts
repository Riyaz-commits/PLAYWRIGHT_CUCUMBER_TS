import { BeforeAll, AfterAll, Before, After, AfterStep } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { Context } from "vm";


let browser : Browser
let context : BrowserContext

BeforeAll(async function (){

    browser =  await chromium.launch({headless: true})
})

Before(async function (){
   context =  await browser.newContext();
  const  page =await context.newPage()
    pageFixture.page = page;
} )

AfterStep(async function ({pickle,result}) {

    const milliseconds = getPerformanceMilliseconds();
    console.log("Milliseconds: " + milliseconds);
    const img =await   pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`, type:"png"})
    await this.attach(img,"image/png")

})

After(async function ({pickle}) {
   
     /*  const img =await   pageFixture.page.screenshot({path: `./test-result/screenshots/${pickle.name}.png`, type:"png"})
      await this.attach(img,"image/png") */
      await pageFixture.page.close();
     await context.close();
    
})


AfterAll(async function () {
    
    await browser.close();
})


function getPerformanceMilliseconds() {
    return performance.now();
}