import {test,expect} from '@playwright/test'


test("Pagenation",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    const table= await page.locator("#productTable")
    const columns=  await table.locator("thead tr th")
    console.log("TOTAL NO OF columns:"+ await columns.count())


    const rows= await table.locator("tbody tr")
    console.log("No of rows:"+ await rows.count())


    expect(await rows.count()).toBe(5)
    expect(await columns.count()).toBe(4)

    // select checkbox for product 4

    // const matchedRow= rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Smartwatch'
    // })
    // await matchedRow.locator('input').check()



    // select multiple producta by using reusable method

    // await selectProduct(page, rows, "Smartphone")
    // await selectProduct(page, rows, "Laptop")
    // await selectProduct(page, rows, "Tablet")
    // await selectProduct(page, rows, "Smartwatch")
    // await page.waitForTimeout(4000)



// print all rows data

    // for (let i = 0; i < await rows.count(); i++) {

    //     const row = await rows.nth(i)
    //     const tds = await row.locator('td')
    //     for (let j = 0; j < await tds.count() - 1; j++) {

    //         const data = await tds.nth(j).textContent()
    //         console.log("table data is " + data)

    //     }
    // }




// Read data from all pages

const allpages= await page.locator('.pagination li a')
console.log("No of pages"+ await allpages.count())


for(let p=0; p< await allpages.count();p++)
{

    if(p>0)
    {
await allpages.nth(p).click()

    }

     for (let i = 0; i < await rows.count(); i++) {

        const row = await rows.nth(i)
        const tds = await row.locator('td')
        for (let j = 0; j < await tds.count() - 1; j++) {

            const data = await tds.nth(j).textContent()
            console.log("table data is " + data)

        }
    }
await page.waitForTimeout(4000)
    
}
await page.waitForTimeout(4000)
})



// async function  selectProduct(page,rows,name)
    
// {

//     const matchedRow=  rows.filter({
//         has:page.locator('td'),
//         hasText: name
//     })
//     await matchedRow.locator('input').check()

// }









test("Web Table",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    const table= await page.locator("//table[@name='BookTable']")
    const columns=  await table.locator("tbody tr th")
    console.log("TOTAL NO OF columns:"+ await columns.count())


    const rows= await table.locator("tbody tr")
    console.log("No of rows:"+ await rows.count())



const seleniumRow= rows.filter({

    hasText:'Master In Selenium'
})


const all_ids=await seleniumRow.locator('td')
const bookName= await all_ids.nth(0).textContent()
const authorName= await all_ids.nth(1).textContent()
const subect= await all_ids.nth(2).textContent()
const price= await all_ids.nth(3).textContent()
console.log(bookName,authorName,subect,price)
await page.waitForTimeout(4000)

})








