import {test,expect} from '@playwright/test'




test.describe.parallel("parallel",() =>{







test("Sample test 1",async ({page}) =>{

    await page.goto("https://www.google.com/")

   // await page.waitForTimeout("3000")
//await expect(page).toHaveTitle("venkat")

})


test("Sample test 2",async ({page}) =>{

    await page.goto("https://www.google.com/")

   // await page.waitForTimeout("3000")

    //await page.goto('https://file-examples.com/');
   //await page.screenshot({path:'venkat.png',clip:{x:0,y:0,width:400,height:400}})
})



})