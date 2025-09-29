import {test,expect} from '@playwright/test'



// const urls= [

//     'https://www.google.com/',

//      'https://www.facebook.com/',
//       'https://www.gmail.com/',
//         'https://www.facebook1.com/',

// ];

// test.describe.configure({mode:'parallel'})



// const roles=[


    

// { username:'venkat',password:'venkat'},
// { username:'venkat1',password:'venkat1'},
    
// ];

//     for(const role of roles){

// test(`Title check for ${role.username}`,async ({page}) =>{

//   await page.goto('https://app.com/login');
//       await page.fill('#username', role.username);
// })

//     }


test.describe('Parallel Tests', () => {
  test.describe.configure({ mode: 'parallel' });

  test('Test A', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
  });

  test('Test B', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
  });

   test('Test C', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle(/Example/);
  });

  test('Test D', async ({ page }) => {
    await page.goto('https://playwright.dev');
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  
});