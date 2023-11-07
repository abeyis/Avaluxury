import { Given, When, Then,And } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { doubleVanitiesPage } from "../../../pages/doubleVanitiesPage.js";

let HomePage = null;
let DoubleVanitiesPage = null;

before(() => {
    DoubleVanitiesPage = new doubleVanitiesPage();
    HomePage = new homePage();
});
When('User clicks to Double Bathroom Vanities', () => {
    HomePage.clickDoubleVanities();
});

When('I should see all links are working', () => {
    cy.checkBrokenLinks();
});


 When('I locate the email subscription box at the bottom of the website', () => {
  DoubleVanitiesPage.locateEmailSubscriptionBox();
  });
  
  Then('I enter a valid email address', () => {
    const validEmail = 'selma.berg@abeyis.com';
    DoubleVanitiesPage.enterValidEmail(validEmail);
  });
  
  And('I click the subscribe button', () => {
    DoubleVanitiesPage.clickSubscribeButton();
  });

