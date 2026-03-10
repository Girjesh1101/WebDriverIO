import { Given, Then, When } from "@wdio/cucumber-framework";
import reporter from "../../helper/reporter.ts";
import constant from "../../../data/constants.json";
import apiHelper from "../../helper/apiHelper.ts";
import fs from "fs";
import { error } from "console";
import nopcommerceHomePage from "../../page-objects/nopcommerce.home.page.ts";
import nopcommerceCustlistPage from "../../page-objects/nopcommerce.custlist.page.ts";

/**API GET list of user from reqres api
 * Sub-steps
 * 1. Get payload data
 * 2. Make get call using API helper
 * 3. Store result
 */

let testid = "E2E001";
Given(
  /^Get list of (.*) from reqres.in$/,
  async function (endpointRef: string) {
    if (!endpointRef)
      throw Error(`Given endpoint ref: ${endpointRef} is not valid`);
    /**1. Get payload data */
    try {
      reporter.addStep(
        testid,
        "info",
        `Getting the payload data for endpoint ${endpointRef}`,
      );
      console.log(">> testid : ", testid);

      let endpoint = "";
      if (endpointRef.trim().toUpperCase() === "USERS") {
        endpoint = constant.REQRES.GET_USERS;
      }

      if (!endpoint)
        throw Error(
          `Error getting endpoint : ${endpoint} from the constant.json`,
        );

      /** Make get call by using API helper */
      let res: any;
      await browser.call(async function () {
        //@ts-ignore
        res = await apiHelper.GET(
          testid,
          "https://reqres.in",
          endpoint,
          constant.REQRES.QUERY_PARAM,
          "",
        );
      });
      //@ts-ignore
      if (res.status !== 200) expect.fail(`Failed getting uses`);
      reporter.addStep(
        testid,
        "debug",
        `API response recieved, data ${JSON.stringify(res.body)}`,
      );

      let data = JSON.stringify(res.body, undefined, 4); // 2 param is uncessary (undefind and 4 -> pretty formate)
      let filename = `${process.cwd()}/data/api-response/reqresAPIUsers.json`;
      fs.writeFileSync(filename, data);
      reporter.addStep(
        testid,
        "info",
        `API response from ${endpoint} store in json file`,
      );
    } catch (err: any) {
      err.message = `${testid} : failed at getting API users from reqres, ${error}`;
      throw err;
    }
  },
);

When(
  /^An as (.*) user login to nopcommerce site$/,
  async function (user: string) {
    if (!user) throw Error(`Given user is ${user} in valid`);
    user = user.trim().toLowerCase();
    console.log("Admin user : ", user);

    try {
      reporter.addStep(testid, "info", `login to nop commerce demo site`);
      console.log(">> testid admin: ", testid);
      console.log("Nop comm");

      await nopcommerceHomePage.loginToNopCommerceWeb(
        testid,
        "https://admin-demo.nopcommerce.com/login",
        //@ts-ignore
        process.env.TEST_NOP_ADMIN_USERNAME,
        process.env.TEST_NOP_ADMIN_PASSWORD,
      );
    } catch (error: any) {
      error.message = `${testid} failed at nopcommerece login step`;
      throw error;
    }
  },
);

Then(/^Verify if all (.*) exist in customer list$/, async function (user) {
  try {
    // await browser.url("https://admin-demo.nopcommerce.com/Admin/Customer/List");
    await $("//nav[@class='mt-2']/ul/li[4]/a").click();
    await $ ('//a[@href="/Admin/Customer/List"]').click();
    reporter.addStep(testid, "info", `Navigate to customer list screen`);

    let filename = `${process.cwd()}/data/api-response/reqresAPIUsers.json`;
    let data = fs.readFileSync(filename, "utf8");
    let dataObj = JSON.parse(data);

    console.log(">> API data :", JSON.stringify(dataObj));

    let noOfObj = dataObj.data.length;
    let arr = [];
    for (let index = 0; index < noOfObj; index++) {
      let obj = {
        firstname: "",
        lastname : ""
      };
      let firstname = dataObj.data[index].first_name;
      let lastname = dataObj.data[index].last_name;
      let customerNoFound = await nopcommerceCustlistPage.searchNameAndConfirm(
        testid,
        firstname,
        lastname,
      );
      if (customerNoFound) {
        obj["firstname"] = firstname;
        obj["lastname"] = lastname;
        arr.push(obj);
      }
    }

    if (arr.length > 1) {
      let data = JSON.stringify(arr, undefined, 4);
      let filepath = `${process.cwd()}/results/customerNotFoundList.json`;
      fs.writeFileSync(filepath, data);
    }
  } catch (err: any) {
    err.message = `${testid} fialed at checking users in nopcommerece site. ${err.message}`;
    throw err;
  }
});
