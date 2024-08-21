import { BeforeAll, AfterAll, Before, After, AfterStep, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import { fixture } from "./pageFixture";
import { Context } from "vm";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra")


let browser : Browser
let context : BrowserContext

BeforeAll(async function (){
getEnv();
    browser =  await invokeBrowser()
    chromium.launch({headless: true})
})

Before(async function ({pickle}){
    const scenarioName = await  pickle.name+pickle.id;
   context =  await browser.newContext({
    recordVideo:{
  dir: "test-results/videos",
    }
   });
  const  page =await context.newPage()
    fixture.page = page;
    fixture.logger = createLogger(options(scenarioName))
} )

AfterStep(async function ({pickle,result}) {
let img: Buffer;
    const milliseconds = getPerformanceMilliseconds();
    console.log("Milliseconds: " + milliseconds);
     img =await   fixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"})
    this.attach(img, "image/png");


})

After(async function ({pickle, result}) {
    let videoPath : Promise<String>;
   
     /*  const img =await   pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:"png"})
      await this.attach(img,"image/png") */
      if(result?.status == Status.PASSED || result?.status == Status.FAILED){

        this.videoPath =  await fixture.page.video()?.path()
    }
      await fixture.page.close();
     await context.close();
 if(result?.status == Status.FAILED || result?.status == Status.PASSED){
    await  this.attach(
        fs.readFileSync(this.videoPath),'video/webm'
    );
}
    
})


AfterAll(async function () {
    
    await browser.close();
})


function getPerformanceMilliseconds() {
    return performance.now();
}