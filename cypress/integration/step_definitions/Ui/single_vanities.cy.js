// Feature: Single Vanities Button Functionality


import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { SingeVanitiesPage } from "../../../pages/single_vanities_page";


//     Background: User is on the home page
//         Given User navigates to Home Page

//     Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page
//         When User clicks to Single Vanities
//         Then User verifies the page title is "Single Bathroom Vanities"


Given('User navigates to Home Page', () => {
  cy.visit(Cypress.env('avaluxury_endpoint'));
   }); 

let HomePage=null
before(()=>{
    HomePage =new homePage();
})

When('User clicks to Single Vanities', () => {
    HomePage.clickSingleVanities();
});
   
Then('User verifies the page title is "Single Bathroom Vanities"', (pageTitle) => {
    cy.title().should('contain', pageTitle);
}); 


// Scenario: Color filter test (green & black)
//         When User clicks to Single Vanities
//         And User clicks the Color Filter Button
//         And User clicks Green colour
//         And The page should display only the green vanities 
//         And User clicks Black Color
//         Then the page should display green and black vanities


When('User clicks to Single Vanities', () => {
    HomePage.clickSingleVanities();
  });
  
  And ('User clicks the Color Filter Button', () => {
    SingeVanitiesPage. clickColorButton();
  });
  
  And ('User clicks Green colour', () => {
    SingeVanitiesPage.clickGreenColour();
  })













