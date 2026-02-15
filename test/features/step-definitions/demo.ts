import { Given, When , Then } from "@wdio/cucumber-framework";

import { expect } from "expect-webdriverio";


Given(/^the user launches the CURA web app$/, async function () {
    await browser.url('https://katalon-demo-cura.herokuapp.com/');
    await expect(browser).toHaveTitle('CURA Healthcare Service');
});

When(/^the user clicks on make appointment button$/ , async function(){
    await $("=Make Appointment").click();
});

Then(/^the login page should be displayed$/, async function(){
    await expect(browser).toHaveUrl("https://katalon-demo-cura.herokuapp.com/profile.php#login");
})