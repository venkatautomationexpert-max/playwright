import {test,expect,chromium, firefox} from '@playwright/test'
import { channel } from 'diagnostics_channel';




// test.use({channel:'firefox'})
test("await", async ()=>{


      const browser = await chromium.launch({
        // channel: 'chromium',
        // headless:false,
        // args:[
        //     //'--start-maximized',
        //     '--incognito',
            
        // ]
      });
      const context = await browser.newContext();
      const page = await context.newPage();
    
         await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
        await page.locator("//input[@placeholder='username']").fill("Admin")
        await page.locator("//input[@placeholder='password']").fill("admin123")
        await page.locator("//button[normalize-space()='Login']").click()
      await page.waitForTimeout(3000)
      //await page.context().storageState({ path: './auth.json' });
})