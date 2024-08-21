import {LaunchOptions , chromium} from "playwright-core"


const options : LaunchOptions ={
    headless: false
}
export const invokeBrowser = function ()
{

const browserTYpe = process.env.BROWSER;

switch(browserTYpe)
{
    case "chrome":
        chromium.launch(options);
        break;
        case "webkit":
            chromium.launch(options);
            break;
            case "firefox":
            chromium.launch(options);
            break;
}

}