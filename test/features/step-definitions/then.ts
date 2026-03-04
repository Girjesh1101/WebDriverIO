import { Then } from "@wdio/cucumber-framework"
import * as chai from "chai";
import logger from "../../helper/logger.ts";
const { expect } = chai;


Then(/^Invertory page shouold list (.*)$/, async function (numberOfProducts) {

    // if number is invalide throw error
    if(!numberOfProducts) throw Error("Invalid product count provider: ",numberOfProducts);
    let allProducts = await $$(".inventory_item_name ");
    expect(allProducts.length).to.equal(parseInt(numberOfProducts)); // === chai use strict comparison
    
})

Then(/^Validate all product have valid price$/, async function(){
    logger.info("Checing the price..")
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
    expect(invalidPriceArr.length).to.be.equal(0);

})