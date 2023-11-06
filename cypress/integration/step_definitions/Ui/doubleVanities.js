
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { doubleVanitiesPage } from "../../../pages/doubleVanitiesPage";


let HomePage=null
let DoubleVanitiesPage=null
before(()=>{
  DoubleVanitiesPage=new doubleVanitiesPage();
  HomePage =new homePage();
  
})

When('User clicks to Double Bathroom Vanities', () => {
    HomePage.clickDoubleVanities();
});

When('I should see all links are working', () => {
    cy.checkBrokenLinks();
});

When("I enter {string} into the search box", (searchTerm) => {
    cy.typeAndEnter(DoubleVanitiesPage.doubleVanitiesPageSelectors.searchField, searchTerm);

});

Then('I should see search results for {string}', (searchTerm) => {
    cy.verifySearchResults(searchTerm);
  });
