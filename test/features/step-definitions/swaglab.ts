import { Given, Then } from "@wdio/cucumber-framework";
import logger from "../../helper/logger.ts";
import reporter from "../../helper/reporter.ts";
import homePage from "../../page-objects/sause.home.page.ts";
Given(
  /^As (a|an) (.*) user I login to invertory web app$/,
  async function (prefixTxt, userType, dataTable) {
    try {
      reporter.addStep(this.testid, "info", "login to swag Lab");
      let dt = dataTable.hashes();

      //@ts-ignore
      await homePage.navigateTo(browser.config.sauseDemoURL);

      await homePage.loginCredential(
        this.testid,
        process.env.TEST_STD_USERNAME ?? "",
        process.env.TEST_STD_PASSWORD ?? "",
      );

      console.log("Success");
    } catch (error) {
      console.log("Got itmError in first login. Retrying..");
    }
  },
);
