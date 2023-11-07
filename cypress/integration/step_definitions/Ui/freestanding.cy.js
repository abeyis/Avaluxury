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
 // cy.get('button[data-fvalue="Green"] span').click()
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

/*
When('the user clicks on the search box', () => {
  
});
And('the user chooses {string} the product',()=>{

})

Then('the user should only see the selected {string} product', (product) => {
});

When('the user chooses {string} the product', (product) => {
  
});

When('the user clicks the add to cart box', () => {
});

Then('the user should be able to see the products added to the cart', () => {
});

Then('the user should be able to continue shopping if they want', () => {
});
When('the user clicks on the introduction box', () => {
});

Then('the user should see {string} product numbers', (number) => {
});

Then('the user must be able to select {string} the number of shows', (number) => {
});

When('the user sees the details of each product listed with pictures', (number) => {
});
When('the user clicks on the {string} box', (number) => {

});
And('the user should be able to click on the products', (number) => {

});
And('all the sort variants of the user must be seen', (number) => {
  
});

Then('the user should be able to select the desired sort list', (number) => {
  
});

Then('the user should be redirected to the detail page of the product', () => {
});
*/