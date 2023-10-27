import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { freestandingPage } from "../../../pages/freestandingPage";
import { homePage } from "../../../pages/homePage";

//let homePage = null
//let freestandingPage = null
before(()=>{
    freestandingPage = new freestandingPage()
    homePage =new homePage();
  })
When('user goes to freestanding vanities page', () => {
    
    homePage.clickFreestanding()

});

And('user picks a color', () => {

freestandingPage.pickColor()

});

Then('user should see only color products', () => {


});