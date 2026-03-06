import Page from "./page.ts"
import { expect } from "chai"
import reporter from "../helper/reporter.ts"

class HomePage extends Page {
  constructor() {
    super();
  }

  /** Page Objects */
  get usernameInputBox(): ChainablePromiseElement {
    return $("#user-name");
  }

  get passwordInputBox(): ChainablePromiseElement {
    return $("#password");
  }

  get loginBtn(): ChainablePromiseElement {
    return $("#login-button");
  }
  /** Page Actions */

  async enterUsername(testid: string, username: string) : Promise<void> {
    if (!username) throw Error(`Given username : ${username} is not valid`);

    try {
      username = username.trim();
      await this.typeInto(this.usernameInputBox, username);
      reporter.addStep(
        testid,
        "info",
        `Username : ${username} enter successfully`,
      );
    }  catch (err) {
        const error = err as Error;
        error.message = `Error entering username`
        throw error
    }
  }

  async enterPassword(testid: string, password: string) {
    if (!password) throw Error(`Given username : ${password} is not valid`);

    try {
      password = password.trim();
      await this.typeInto(this.passwordInputBox, password);
      reporter.addStep(
        testid,
        "info",
        `Username : ${password} enter successfully`,
      );
    } catch (err) {
        const error = err as Error;
        error.message = `Error entering password`
        throw error
    }
  }

       async clickLoginBtn(testid:string,){
      
        try {
          await this.click( this.loginBtn);
          reporter.addStep(testid ,"info" ,"Login Button clicked"  );
        } catch (err) {
        const error = err as Error;
        error.message = "Error clicking on Login button"
        throw error
    }
    }

    async loginCredential(testid : string , username : string, password : string){
        await this.enterUsername(testid, username);
        await this.enterPassword(testid, password);
        await this.clickLoginBtn(testid);
    }
}
export default new HomePage()