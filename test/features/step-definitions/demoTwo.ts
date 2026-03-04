import { Given, Then, When } from "@wdio/cucumber-framework";
import * as chai from "chai";
const { expect } = chai;

Given(/^google page is opened$/, async function () {
    await browser.url("https://www.google.com/");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});

When(/^search with (.*)$/, async function (searchTerm: string) {
    let searchInput = await $("[name='q']");
    await searchInput.setValue(searchTerm);
    await browser.keys(["Meta", "Enter"]);
    await browser.pause(2000);

});

Then(/^click on first search result$/, async function () {
    await $("h3").click();
});

Then(/^URL should match (.*)$/, async function (expectedURL: string) {
    console.log(">> Expected URL: ",expectedURL);
    await browser.waitUntil( async ()=>{
        return await browser.getTitle() === "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO";
    }, {timeout:20000, interval:500, timeoutMsg:"Expected URL is not loaded within time"});// take two param first function either true and false and second times.
    
    let currentURL = await browser.getUrl();
    expect(currentURL).to.equal(expectedURL);
});