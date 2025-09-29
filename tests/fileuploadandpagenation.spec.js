


import {test,expect} from '@playwright/test'
import { asyncWrapProviders } from 'async_hooks'




test("File uolad and pagenation",async({page})=>{


    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html")
    await page.locator("#fileinput").setInputFiles("C:/Users/Admin/Downloads/download.xlsx")
    await page.waitForTimeout(4000)
let hasNext= true

let pagecount=1
while(hasNext){

   //    const items =await page.locator(".rdt_TableBody #cell-2-undefined").allTextContents()
    const items =await page.locator(".rdt_TableRow").allTextContents()
    console.log(`page ${pagecount} items:`+ items)
    expect(items.length).toBeGreaterThan(0)
    pagec
    
    count++


    const nextpage=await page.locator("#pagination-next-page")
    if(await nextpage.isVisible()){
        if(await nextpage.isEnabled()){
              await nextpage.click()
              //await page.waitForLoadState('networkidle')
        }
        else{
            hasNext=false
        }
          

    }
    else{
        hasNext=false
    }
    console.log(`total pages navigated${pagecount -1}`)
}

   


})