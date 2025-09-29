import {test,expect} from '@playwright/test'




test.describe.parallel("parallel testing",()=>{




test("Sample test",async ({page}) =>{

    await page.goto("https://www.google.com/")

   // await page.waitForTimeout("3000")

//await expect(page).toHaveTitle("venkat")

})


test("Sample test 1",async ({page}) =>{

    await page.goto("https://www.google.com/")

   // await page.waitForTimeout("3000")
})



test(" Sample test 2 ",async ({page}) =>{

    await page.goto("https://www.google.com/")

   // await page.waitForTimeout("3000")
})


test("Sample test 3",async ({page}) =>{

    await page.goto("https://www.google.com/")

   // await page.waitForTimeout("3000")
})


test("Sample test 4",async ({page}) =>{

    await page.goto("https://www.google.com/")
    

   // await page.waitForTimeout("3000")
   //await page.locator().selectOption()
})


})


test("Sample test 5",async ({page,browserName}) =>{

if(browserName==="chromium"){
    test.setTimeout(60000);

}
    else if(browserName==="firefox"){
        test.setTimeout(30000)
    }

    else{
        test.setTimeout(20000)  
    }

})