import {  Given, Then } from "@wdio/cucumber-framework";
import logger from "../../helper/logger.ts";
Given(/^As (a|an) (.*) user I login to invertory web app$/, async function (prefixTxt , userType, dataTable) {

  logger.info("Logging with user")
  // print cucumber table data
  let dt = dataTable.hashes();
  console.log(">> The type of dt : ", typeof dt.constructor);
  console.log(">> The userType : ", userType);
  
  //@ts-ignore
  // const cfgUrl = (browser as any)?.config?.sauseDemoURL ?? process.env.SAUCE_DEMO_URL ?? "https://www.saucedemo.com/";
  // await browser.url(cfgUrl)

  await browser.url(browser.config.sauceDemoURL)
    
    await browser.setTimeout({implicit:15000,pageLoad:10000})
    await browser.maximizeWindow();

    // Login to Inventory
  try {
      await $("#user-name").setValue(process.env.TEST_STD_USERNAME ?? "");
      await $("#password").setValue(process.env.TEST_STD_PASSWORD ?? "");
      await $("#login-button").click();
  } catch (error) {
    console.log("Error in first login. Retrying..");
    
  }
    await browser.pause(2000); 
})

Then(/^Invertory page shouold list (.*)$/, async function (numberOfProducts) {

    // if number is invalid throw error
    if(!numberOfProducts) throw Error("Invalid product count provider: " + numberOfProducts);
    let allProducts = await $$(".inventory_item_name ");
    expect(allProducts.length).toBe(parseInt(numberOfProducts));
    
})

Then(/^Validate all product have valid price$/, async function(){

    let priceArr = await $$(".inventory_item_price");
    let priceStrArr = [];
    for(let i = 0 ; i < await priceArr.length; i++){
        let price = await priceArr[i].getText();
        priceStrArr.push(price);
    }
    console.log(">> price with $ :",priceStrArr)
    let priceNum =  priceStrArr.map(ele=>+(ele.replace("$","")));
    console.log(">> price :",priceNum);

    let invalidPriceArr = priceNum.filter(ele => ele <= 0);
    expect(invalidPriceArr.length).toBe(0);

})