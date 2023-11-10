import { Then, When, And } from "cypress-cucumber-preprocessor/steps";
import { freestandingPage } from "../../../pages/freestandingPage";
import { homePage } from "../../../pages/homePage";

let HomePage = null;
let FreestandingPage = null;
before(() => {
  FreestandingPage = new freestandingPage();
  HomePage = new homePage();
});

When("User clicks to Freestanding Bathroom Vanities", () => {
  HomePage.clickFreeStandingVanities();
});

And("user picks {string} as color", (color) => {
  cy.contains("span", "Color").click();
  FreestandingPage.chooseColor(color);
});
Then("user should see only {string} products", (color) => {
  FreestandingPage.verifyProductColor(color);
});
Given("User navigates to Home Page", () => {
  FreestandingPage.pickColor();
});

And("the user must see {string} all dimensions", (size) => {
  FreestandingPage.pickSize(size);
});
Then("the user should be {string} able to select the size", (size) => {
  FreestandingPage.verifyProductSize(size);
});
