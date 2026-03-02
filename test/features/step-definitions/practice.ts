import { Given, Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import { count } from "node:console";

Given(/^open the home page$/, async()=>{

    const url : string = "https://testautomationpractice.blogspot.com/";

    await browser.url(url);
    await browser.maximizeWindow();
    await browser.setTimeout({pageLoad:10000, implicit: 10000});
    let title = await browser.getTitle();
    expect(title).to.be.equal("Automation Testing Practice")
})

Then(/^complete the text field task$/, async function(){
    
    let name : string ="automation";
    let email : string = "autmation@gmail.com";
    let phone : string = "9876543210";
    let address : string = "test address";

    await $("#name").setValue(name);
    await $("#email").setValue(email);
    await $("#phone").setValue(phone);
    await $("#textarea").setValue(address);
})

Then(/^complete alert task$/, async function(){
    
    console.log(">> Handling Alerts");
    
    // // single alert
    // await $("#alertBtn").click();
    // if(await browser.isAlertOpen()){
    //     await browser.acceptAlert();
    // }

    // // confirm alert
    // await $("#confirmBtn").click();
    // if(await browser.isAlertOpen()){
    //     // await browser.dismissAlert();
    //     await browser.acceptAlert();
    //     expect(await $("#demo").getText()).to.be.equal("You pressed OK!");
    //     await browser.pause(5000);
    // }
    // else if(await browser.isAlertOpen()){
    //     await browser.dismissAlert();
    //     expect(await $("#demo").getText()).to.be.equal("You pressed Cancel!");
    // }else{
    //     console.log("Invalid Alert");
    // }

    // let name : string ="WebdriverIO"
    // await $("#promptBtn").click();
    // if(await browser.isAlertOpen()){
    //     let alertTxt= await browser.getAlertText();
    //     console.log(">>> Alert Text : ", alertTxt);
    //     await browser.sendAlertText(name);
    //     await browser.acceptAlert();
    //     expect(await $("#demo").getText()).to.be.equal("Hello " + name + "! How are you today?")
    // }
})

  Then(/^complete dropdown task$/, async function(){

        let  countryValue = "India";
        let country  = await $("#country");

        console.log(">> country : ", await country.getText());
        await country.selectByVisibleText(countryValue);
        await country.selectByIndex(4);
        await country.selectByAttribute("value", "japan")

        // another multiple selector dropdwon
        // I have to 
        let colorArr = ["Red","Yellow", "Blue"];
        let color = await $("#colors");
        await color.selectByVisibleText("Red");

        

    })

    Then(/^complete checkbox task$/, async function(){

        let days = await $$("//div[@class='form-group']//input[@type='checkbox']")
        for( let i = 0 ;  i < await days.length ; i++){

            let ele = await days[i];
            let attrValue = await ele.getAttribute("value");
            console.log(">> days : ", attrValue);  
                
            // if(attrValue === " saturday"){
            //     await ele.click()
            // }else{
            //     console.log("Conditions don't work");  
            // }
            if(! await ele.isSelected()){
                await ele.click();
            }
        }
        await browser.debug();

    })