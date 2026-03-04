import { setWorldConstructor } from "@wdio/cucumber-framework";
import { expect } from "chai";

class CustomWorld{
    
    constructor(){

    }
}
setWorldConstructor(CustomWorld) 