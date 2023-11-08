import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { freestandingPage } from "../../../pages/freestandingPage";
import { homePage } from "../../../pages/homePage";


let HomePage = null
let FreestandingPage = null
before(()=>{
FreestandingPage = new freestandingPage();
HomePage =new homePage();
})
When('user goes to freestanding vanities page', () => { 
HomePage.clickFreestanding()
});
And('user picks {string} as color', (color) => {
cy.contains('span', 'Color').click()
FreestandingPage.chooseColor(color)
});
Then('user should see only {string} products', (color) => {
FreestandingPage.verifyProductColor(color);
});
Given('User navigates to Home Page', () => {
FreestandingPage.pickColor()
});
When('the user clicks on the size', () => {
HomePage.clickFreestanding()
});
And('the user must see {string} all dimensions', (size) => {
FreestandingPage.pickSize(size)
});
Then('the user should be {string} able to select the size', (size) => {
FreestandingPage.verifyProductSize(size);
});
