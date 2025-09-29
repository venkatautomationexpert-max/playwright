import {test,expect} from '@playwright/test'















test("Sample test 2",async ({page}) =>{

    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//await expect(page.locator("//span[normalize-space()='User Management']")).toBeVisible()

})

test("Sample test 3",async ({page}) =>{

    //await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//await expect(page.locator("//span[normalize-space()='User Management']")).toBeVisible()

})



