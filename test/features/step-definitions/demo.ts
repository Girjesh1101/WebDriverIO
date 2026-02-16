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

// Web Interactions Steps

Given(/^A web page is opened$/, async function () {
    await browser.url('/inputs');
    await browser.setTimeout({implicit: 15000, pageLoad:10000});
    await browser.maximizeWindow();
    
})

When(/^perform web interactions$/, async function(){

    let ele = await $("[type='number']");
    await ele.setValue("123456"); // clear field first then add value
    // await ele.addValue("789"); // add value to existing value
    await browser.pause(2000);

});