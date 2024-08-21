import {LaunchOptions , chromium , firefox , webkit} from "playwright-core"


const options : LaunchOptions ={
    headless: true
}
export const invokeBrowser = function ()
{

const browserTYpe = process.env.BROWSER;

switch(browserTYpe)
{
    case "chrome":
        return  chromium.launch(options);
        
        case "webkit":
          return  webkit.launch(options);
          
            case "firefox":
                return  firefox.launch(options);
           
            default:
                throw new Error("Invalid Browser provided "+browserTYpe)
}

}