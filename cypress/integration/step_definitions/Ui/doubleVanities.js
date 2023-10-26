import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";

let HomePage=null
before(()=>{
  HomePage =new homePage();
})

When('User clicks to Double Bathroom Vanities', () => {
    HomePage.clickDoubleVanities();
});




