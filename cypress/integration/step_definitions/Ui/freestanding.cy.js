import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { freestandingPage } from "../../../pages/freestandingPage";
import { homePage } from "../../../pages/homePage";


let HomePage = null;
let FreestandingPage = null;
before(() => {
  FreestandingPage = new freestandingPage();
  HomePage = new homePage();
});

When("User clicks to Freestanding Bathroom Vanities", () => {
  HomePage.clickFreeStandingVanities();
});

And("user picks {string} as color", (color) => {
  cy.contains("span", "Color").click();
  FreestandingPage.chooseColor(color);
});
Then("user should see only {string} products", (color) => {
  FreestandingPage.verifyProductColor(color);
});
Given("User navigates to Home Page", () => {
  FreestandingPage.pickColor();
});

And("the user must see {string} all dimensions", (size) => {
  FreestandingPage.pickSize(size);
});
Then("the user should be {string} able to select the size", (size) => {
  FreestandingPage.verifyProductSize(size);
});
/*


When('the user clicks on the search box', () => {
  HomePage.clickFreestanding()
});
And('the user chooses {string} the product',()=>{
FreestandingPage.pickSearchProducts(search)
})

Then('the user should only see the selected {string} product', (search) => {
  FreestandingPage.verifySearchProducts(search)
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