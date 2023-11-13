

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { doubleVanitiesPage } from "../../../pages/doubleVanitiesPage";


let HomePage=null
let DoubleVanitiesPage=null
before(()=>{
  DoubleVanitiesPage=new doubleVanitiesPage();
  HomePage =new homePage();
  
})

Given('User clicks to Double Bathroom Vanities', () => {

    HomePage.clickDoubleVanities();
});

When('I should see all links are working', () => {
    cy.checkBrokenLinks();

When("I enter {string} into the search box", (searchTerm) => {
      cy.typeAndEnter(DoubleVanitiesPage.doubleVanitiesPageSelectors.searchField, searchTerm);
  });
  Then('I should see search results for {string}', (searchTerm) => {
      cy.verifySearchResults(searchTerm);
    });
 });
 When('I visit the color selector page', () => {
  DoubleVanitiesPage.visitColorSelectorPage();
 });

 When('I select a color option {string}', (selectedColor) => {
  DoubleVanitiesPage.selectColorOption(selectedColor);
});

  Then('I should see that the selected color {string} is checked', (selectedColor) => {
    DoubleVanitiesPage.checkSelectedColorIsChecked(selectedColor);
  });

  Then("User clicks on random Add to Carts", function () {
    DoubleVanitiesPage.addToCarts();
  });
  
  And("User clicks on the Continue Shopping", function () {
    DoubleVanitiesPage.continueShopping();
  });
  
  

 When('I locate the email subscription box at the bottom of the website', () => {
  DoubleVanitiesPage.locateEmailSubscriptionBox();
  });
  
  When('I enter a valid email address {string}', (email) => {
    DoubleVanitiesPage.enterValidEmail(email);
});


  And('I click the subscribe button', () => {
    DoubleVanitiesPage.clickSubscribeButton();
  });

