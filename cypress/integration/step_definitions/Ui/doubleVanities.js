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

 When('I visit the color selector page', () => {
    cy.get('span:contains("Color")').each(($el) => {
      cy.wrap($el).click();
    });
  });
When('I select a color option {string}', (selectedColor) => {
    cy.get(`button[title="${selectedColor}"]`).click();
  });
  
  Then('I should see that the selected color {string} is checked', (selectedColor) => {
    cy.get(`button[title="${selectedColor}"]`).should('have.attr', 'aria-checked', 'true');
  });
