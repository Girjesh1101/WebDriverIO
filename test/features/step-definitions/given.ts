import { Given } from "@wdio/cucumber-framework";
Given(/^Login to invertory web app$/, async function () {
    
    await browser.url("https://www.saucedemo.com/");
    await browser.setTimeout({implicit:15000,pageLoad:10000})
    await browser.maximizeWindow();

    // Login to Inventory
  try {
      await $("#user-name").setValue("standard_user");
      await $("#password").setValue("secret_sauce");
      await $("#login-button").click();
  } catch (error) {
    console.log("Error in first login. Retrying..");

    await browser.pause(20000);
    await browser.refresh(); // refresh the page and try again

    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();
    
  }

    // Login with another user
    await browser.pause(2000);
    // await browser.reloadSession();
    // await browser.url("https://www.saucedemo.com/");
    // await $("#user-name").setValue("problem_user");
    // await $("#password").setValue("secret_sauce");
    // await $("#login-button").click();

    
})