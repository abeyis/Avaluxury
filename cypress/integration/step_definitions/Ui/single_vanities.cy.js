// Feature: Single Vanities Button Functionality


import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { SingeVanitiesPage } from "../../../pages/single_vanities_page";


//     Background: User is on the home page
//         Given User navigates to Home Page

//     Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page
//         When User clicks to Single Vanities
//         Then User verifies the page title is "Single Bathroom Vanities"



   

let HomePage=null
before(()=>{
    HomePage =new homePage();
})

When('User clicks to Single Vanities', () => {
    HomePage.clickSingleVanities();
});
   
Then('User verifies the page title is {string}', ("Single Bathroom Vanities") => {
    cy.title().should('contain', "Single Bathroom Vanities")
});     















