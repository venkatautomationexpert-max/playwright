
//import { asyncWrapProviders } from "async_hooks"
import {page,locator} from '@playwright/test'



class Loginpage{


    constructor(page){

        this.page=page

          this.userName= page.locator("//input[@id='user-name']")
    this.password= page.locator("//input[@id='password']")
    this.loginBtn= page.locator("//input[@id='login-button']")
     this.errorMessage = page.locator('[data-test="error"]');
      this.inventoryContainer = page.locator('.inventory_list');

    }

    async navigateToURL(url){

        await this.page.goto(url)
    }

    async enterUserNamePassword(username,password){


        await this.userName.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()

    }
   

    async waitForTime(timeout){

         await this.page.waitForTimeout(timeout);
    }

async getErrorMessage(){
     return await this.errorMessage.textContent();
}
async isInventoryBisible(){

   return  await this.inventoryContainer.isVisible()
}

}

module.exports={Loginpage}