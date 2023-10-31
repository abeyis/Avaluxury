// Feature: Single Vanities Button Functionality


import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { SingeVanitiesPage } from "../../../pages/single_vanities_page";


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















