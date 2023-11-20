import { homePage } from "../../../pages/homePage";
import { shopAllPage } from "../../../pages/shopAllPage.js";

let HomePage = null;
let ShopAllPage = null;

before(() => {
  ShopAllPage = new shopAllPage();
  HomePage = new homePage();
});

When("User clicks to Shop All", () => {
  HomePage.clickShopAll();
});

And("User clicks on color", () => {
  ShopAllPage.clickColor();
});

When("User gets all available colors", () => {
  ShopAllPage.getColors();
});

When("User selects a random color", function () {
  ShopAllPage.selectRandomColor();
});

When("User filters products by the selected color", () => {
  cy.get("@selectedColor").then((color) => {
    cy.contains("a", color);
  });
});

And("User clicks on random Add to Cart", function () {
  ShopAllPage.addToCart();
});

And("User clicks on Continue Shopping", function () {
  ShopAllPage.clickOnContinueShopping();
});

And("User verifies they are on the all page", function () {
  cy.url().should("eq", "https://avaluxury.com/collections/all");
});
