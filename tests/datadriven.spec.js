

import {test,expect} from '@playwright/test'

import fs from 'fs';


const path1='testdata/data.json'

const jsondata= JSON.parse(fs.readFileSync(path1))


//console.log(jsondata) 




for(const data of jsondata){



    test(`data driven testing ${data.username}`,async({page}) =>{



 
   await page.goto("https://www.saucedemo.com/")

   await page.locator("//input[@id='user-name']").fill(data.username)
    await page.locator("//input[@id='password']").fill(data.password)
    await page.locator("//input[@id='login-button']").click()

   // await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  
   
   })
   

}