import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";

let HomePage=null
before(()=>{
  HomePage =new homePage();
})

When('User clicks to Double Bathroom Vanities', () => {
    HomePage.clickDoubleVanities();
});

When('I should see all links are working', () => {
    cy.checkBrokenLinks();
});

When("I enter {string} into the search box", (searchTerm) => {
    cy.typeAndEnter('input.gf-controls-search-input', searchTerm);
    
});

Then("I should see {string} results for {string}", (expectedResultCount,searchTerm) => {
  cy.checkSearchResults(expectedResultCount, searchTerm);
});
