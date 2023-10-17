import { Given, When } from "cypress-cucumber-preprocessor/steps";


   
Given('User navigates to Auluxury homepage', ()=>{
    
        cy.visit(Cypress.env('avaluxury_endpoint'));
      });