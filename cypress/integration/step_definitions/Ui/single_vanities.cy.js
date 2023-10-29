// Feature: Single Vanities Button Functionality

//     Background: User is on the home page
//         Given User navigates to Home Page

//     Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page
//         When User clicks to Single Vanities
//         Then User verifies the page title is "Single Bathroom Vanities"


import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";

Given('User navigates to Home Page', () => {
  cy.visit(Cypress.env('avaluxury_endpoint'));
   }); 

let HomePage=null
before(()=>{
    HomePage =new homePage();
})

When('User clicks to Design Services', () => {
    HomePage.clickDesignServices();
});
   
Then('User verifies the page title is "Single Bathroom Vanities"', (pageTitle) => {
    cy.title().should('contain', pageTitle);
}); 













