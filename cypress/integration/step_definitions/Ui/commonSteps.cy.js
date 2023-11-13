import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given('User navigates to Home Page', () => {
    cy.visit(Cypress.env('avaluxury_endpoint'));
     });

//Use this function to verify page title     
Then('User verifies the page title is {string}', (pageTitle) => {
        cy.title().should('contain', pageTitle);
    });     
