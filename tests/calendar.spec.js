import { test, expect } from '@playwright/test'

test("calendar", async ({ page }) => {



    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.waitForTimeout(3000)

    await page.locator("//input[@id='first_date_picker']").click()


    await page.locator(".ui-state-default", { hasText: '25' }).click()

    await page.waitForTimeout(3000)






})


test("date picker", async ({ page }) => {


    const month = 'October'
    const year = '2023'
    const date = '25'

    
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//input[@id='datepicker']").click()
    while (true) {

       
        const mon = await page.locator(".ui-datepicker-month").textContent()
        const yr = await page.locator("//span[@class='ui-datepicker-year']").textContent()
        if (yr == year && mon == month) {

            break;

        }
         
       
        //await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()
        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-w']").click()
    }

    










    

    //  const d= await page.$$(".ui-state-default")
    //  for(const dt of d)
    //  {

    //     if(await dt.textContent()==date){
    //         await dt.click()

    //         break
    //            await page.waitForTimeout(4000)
    //     }
    //  }



    
    
    await page.locator("//a[@class='ui-state-default'] [text()='${date}']")
    await page.waitForTimeout(4000);


    




    


})