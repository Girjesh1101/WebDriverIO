import reporter from "../helper/reporter.ts";
import Page from "./page.ts";

class Custlist extends Page {
  constructor() {
    super();
  }

  get firstNameInputBox() {
    return $("#SearchFirstName");
  }
  get lastNameInputBox() {
    return $("#SearchLastName");
  }
  get searchBtn() {
    return $("#search-customers");
  }
  get noResultsMessage() {
    return $(".dt-empty");
  }

  async searchNameAndConfirm(
    testid: string,
    firstname: string,
    lastname: string,
  ): Promise<boolean> {
    if (!firstname || !lastname)
      throw Error(`Inavlid ${firstname} and ${lastname}`);
    let nameNoExist = false;
    firstname = firstname.trim();
    lastname = lastname.trim();
    reporter.addStep(
      testid,
      "info",
      `search user : ${firstname} and ${lastname}`,
    );

    try {
      await this.typeInto(await this.firstNameInputBox, firstname);
      await this.typeInto(await this.lastNameInputBox, lastname);
      await this.click(await this.searchBtn);
      browser.pause(2000);

      let isNoDiplayed = await this.noResultsMessage.isDisplayed();
      if (isNoDiplayed) nameNoExist = true;
    } catch (error: any) {
      throw `Failed searching given firstname : ${firstname} and lastname : ${lastname}`;
    }
    return nameNoExist;
  }
}
export default new Custlist();
