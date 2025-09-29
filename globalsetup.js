// global-setup.ts
import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator("//input[@placeholder='Username']").fill("Admin")
  await page.locator("//input[@placeholder='Password']").fill("admin123")
  await page.locator("//button[normalize-space()='Login']").click()
  await page.context().storageState({ path: './auth.json' });
  //await browser.close();
}

export default globalSetup;