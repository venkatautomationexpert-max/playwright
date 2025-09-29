import {test,expect,chromium, firefox} from '@playwright/test'
import { channel } from 'diagnostics_channel';




// test.use({channel:'firefox'})
test("env file ", async ()=>{




    // console.log(process.env.URL)
    // console.log(process.env.USERNAME)
    // console.log(process.env.PASSWORD)


    // const url= process.env.URL
    // const username= process.env.USERNAME
    // const password= process.env.PASSWORD


      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page = await context.newPage();
    
         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

          //await page.goto(url);
    
        //await page.locator("//input[@placeholder='username']").fill(username)
       // await page.locator("//input[@placeholder='password']").fill(password)
        //await page.locator("//button[normalize-space()='Login']").click()
      await page.waitForTimeout(3000)
    //   //await page.context().storageState({ path: './auth.json' });
})