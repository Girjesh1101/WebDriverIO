import { Given, When , Then } from "@wdio/cucumber-framework";

// import { expect } from "expect-webdriverio";
import { expect } from "chai";




// Given(/^the user launches the CURA web app$/, async function () {
//     await browser.url('https://katalon-demo-cura.herokuapp.com/');
//     await expect(browser).toHaveTitle('CURA Healthcare Service');
// });

// When(/^the user clicks on make appointment button$/ , async function(){
//     await $("=Make Appointment").click();
// });

// Then(/^the login page should be displayed$/, async function(){
//     await expect(browser).toHaveUrl("https://katalon-demo-cura.herokuapp.com/profile.php#login");
// })

// Web Interactions Steps

Given(/^A web page is opened$/, async function () {
    await browser.url('https://the-internet.herokuapp.com/');
    await browser.setTimeout({implicit: 15000, pageLoad:10000});
    await browser.maximizeWindow();
    
})

// When(/^perform web interactions$/, async function(){

//     let ele = await $("[type='number']");
//     await ele.setValue("123456"); // clear field first then add value
//     // await ele.addValue("789"); // add value to existing value
//     await browser.pause(2000);

// });

// Dropdpown Interactions Steps

When(/^perform web interactions$/, async function(){

    // await $("=Dropdown").click();
    // let ele= await $("//select/option[@selected='selected']");
    // let val = await ele.getText();
    // // chai.expect(val).to.equal("Please select an option");
    // expect(val).toBe("Please select an option");
    
    // let dropdown = await $("#dropdown");
    // await dropdown.selectByVisibleText("Option 1");
    // await dropdown.selectByAttribute("value","2");
    // await dropdown.selectByIndex(1);
    // let eleArr = await $$("select > option")
    // let arr = [];
    // for(let i=0; i < await eleArr.length; i++){
    //     let ele = eleArr[i];
    //     let text = await ele.getText();
    //     arr.push(text);
    //     console.log(text);
    // }
    // console.log('>> Options Array : ',arr);

    // checkbox interactions

    // await $("=Checkboxes").click();
    // let checkboxEle = await $("//input[@type='checkbox'][1]");
    // await checkboxEle.click();
    // if(!await checkboxEle.isSelected()){
    //     await checkboxEle.click();
    // }

    // let eleArr = await $$("//input[@type='checkbox']");
    // for(let i=0; i < await eleArr.length; i++){
    //     let ele = eleArr[i];
    //     if(! await ele.isSelected()){
    //         await ele.click();
    //     }
    // }

    // handle windows

    // await $("=Multiple Windows").click();
    // await $("=Click Here").click();
    // await $("=Elemental Selenium").click();

    // let currentWindowTitle = await browser.getTitle();
    // let parentWindowHandle = await browser.getWindowHandle();
    // console.log('>> Current Window Title : ',currentWindowTitle);

    // //  Switch to specific window
    // let winHandles = await browser.getWindowHandles();
    // for(let i=0; i < winHandles.length; i++){
    //     console.log(">> Window Handle : ",winHandles[i]);
    //     await browser.switchToWindow(winHandles[i]);
    //     let title = await browser.getTitle();
    //     console.log(">> Window Title : ",title);
    //     if(title === "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
    //         await browser.switchToWindow(winHandles[i]);
    //         let headerTxt = await $("h1").getText();
    //         console.log(">> Header Text : ",headerTxt);
    //         expect(headerTxt).toBe("Elemental Selenium");
    //         break;
    //     }
    // }

    // await browser.switchToWindow(parentWindowHandle);
    // let parentWinTxt = await $("h3").getText();
    // console.log(">> Parent Window Header Text : ",parentWinTxt);
    // expect(parentWinTxt).toBe("Opening a new window");

    // Alert Handling
    // await $("=JavaScript Alerts").click();
    // await $("button=Click for JS Alert").click();
    // if(await browser.isAlertOpen()){
    //     await browser.acceptAlert();
    // }

    // await $("=Click for JS Confirm").click();
    // if(await browser.isAlertOpen()){
    //     await browser.dismissAlert();
    //     await browser.pause(2000);
    // }

    // await $("=Click for JS Prompt").click();
    // if(await browser.isAlertOpen()){
    //     let alertTxt = await browser.getAlertText();
    //     console.log(">> Alert Text : ",alertTxt);

    //     await browser.sendAlertText("WebDriverIO Alert");
    //     await browser.acceptAlert();    
    //     await browser.pause(2000);
    // }

    // alert authentication handling
    // await browser.url("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    // File upload
    // console.log(process.cwd());
    
    // await $("=File Upload").click();
    // await $("#file-upload").addValue(process.cwd() + "/data/dummy.txt"); // always use absulute path for file upload
    // await $("#file-submit").click();
    // let uploadedFileTxt = await $("h3").getText();
    // console.log(">> Uploaded File Text : ",uploadedFileTxt);
    // expect(uploadedFileTxt).toBe("File Uploaded!");

    // Handle Frames
    // await $("=Frames").click();
    // await $("=iFrame").click();
    // let ele = await $("#mce_0_ifr");
    // await browser.switchFrame(ele);
    
    // await browser.keys(["Meta","A"]);
    // await browser.keys("Delete")

    // // await $("#tinymce").setValue("Hello iFrame");

    // let iframeText = await $("h3").getText();
    // console.log(">> iFrame Text : ",iframeText);

    await $("=Typos").scrollIntoView();
    // await $("=Typos").scrollIntoView(false); // scroll till bottom of the element is visible in viewport

    await $("=Sortable Data Tables").click();
    let rowCount = await $$("//table[@id='table1']/tbody/tr").length;
    console.log(">> Numvber row : ", rowCount);
    expect(rowCount).to.be.equal(4);

    let colCount = await $$("//table[@id='table1']/thead/tr/th").length;
    console.log(">> Numvber Coloum : ", colCount);
    expect(colCount).to.be.equal(6);

    // // print table data
    // let arr = [];
    // for(let i =0 ; i< rowCount; i++){

    //     let personObj = {
    //         lastname : "",
    //         firstname : "",
    //         email : "",
    //         due : "",
    //         web : ""
    //     }

    //     for(let j=0; j < colCount; j++){
    //         let cellData = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}]`).getText();
    //         // console.log(">> Cell Data : ",cellData);
    //         if(j === 0) personObj.lastname = cellData;
    //         if(j === 1) personObj.firstname = cellData;
    //         if(j === 2) personObj.email = cellData;
    //         if(j === 3) personObj.due = cellData;
    //         if(j === 4) personObj.web = cellData;
    //     }
    //     // console.log(">> Person Object : ",personObj);
    //     arr.push(personObj);
    // }

    // console.log("Whole tables: ", JSON.stringify(arr));

    // Get single row (based on a condition)
    // let arr = [];
    // for(let i =0 ; i< rowCount; i++){

    //     let personObj = {
    //         lastname : "",
    //         firstname : "",
    //         email : "",
    //         due : "",
    //         web : ""
    //     }

    //     for(let j=0; j < colCount; j++){
    //         let cellData = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}]`).getText();
    //         let firstName = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[2]`).getText();
    //         // console.log(">> Cell Data : ",cellData);
    //         if(firstName === "Jason"){
    //             if(j === 0) personObj.lastname = cellData;
    //             if(j === 1) personObj.firstname = cellData;
    //             if(j === 2) personObj.email = cellData;
    //             if(j === 3) personObj.due = cellData;
    //             if(j === 4) personObj.web = cellData;
    //         }
    //     }
    //     if(personObj.firstname){
    //         arr.push(personObj);
    //     }
    // }

    // console.log("Single Data from the tables: ", JSON.stringify(arr));

    // if price is less then or equal to 50 then print the person details
    // let arr = [];
    // for(let i =0 ; i< rowCount; i++){
    
    //         // let cellVal =  await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[${j+1}]`).getText();
    //         let price = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[4]`).getText();
    //         let firstname  = await $(`//table[@id='table1']/tbody/tr[${i+1}]/td[2 ]`).getText();
           
    //         if(parseFloat(price.replace("$","")) > 50){
    //             arr.push(firstname);
    //         }
        
    // }
    // console.log(">> name who has more the 50$ : ", arr);
    await browser.debug();

});