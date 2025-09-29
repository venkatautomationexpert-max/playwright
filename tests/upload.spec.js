import {test,expect} from '@playwright/test'



test("uplad a file",async ({browser})=>{


    const context= await browser.newContext({
        acceptDownloads:true
    })


    const page= await context.newPage()
    await page.goto("https://the-internet.herokuapp.com/upload")


    const [filechooser]= await Promise.all([

        page.waitForEvent('filechooser'),

        page.click("#file-upload")
    ])

await filechooser.setFiles('tests/venkat.txt')
await page.click("#file-submit")
await page.waitForTimeout(5000)
})