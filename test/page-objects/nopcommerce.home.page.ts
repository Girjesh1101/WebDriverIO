import reporter from "../helper/reporter.ts";
import Page from "./page.ts";

class HomePage extends Page{

    constructor(){
        super()
    }

    get usernameInputBox() { return $('#Email')}
    get passwordInputBox() { return $('#Password')}
    get loginBtn() { return $('button=Log in')}

    async loginToNopCommerceWeb(testid : string , url : string , username:string , password : string){

        if (!url || !username || !password ){
            throw Error(`Given data , url : ${url} , username : ${username} or password : ${password} is invalid`)
        }

        url = url.trim();
        username = username.trim();

        try {
            reporter.addStep(testid, "info", `Login to : ${url} with username`);
            await this.navigateTo(url)
            await this.typeInto(await this.usernameInputBox, username);
            await this.typeInto(await this.passwordInputBox , password);
            await this.click(await this.loginBtn);
            reporter.addStep(testid, "info", `Login to : ${url} with ${username} is successfully`);
        } catch (error: any) {
            error.message = `Failed to login with nopcommerce web : ${url} with ${username}`
            throw error;
        }
    }
}
export default new HomePage()