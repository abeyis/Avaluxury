import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { floatingBathroomVanities } from "../../../pages/floatingBathroomVanities";

let HomePage = null;
let FloatingBathroomVanities = null;
let productQuantityBeforeDeleting = null;

before(() => {
  HomePage = new homePage();
  FloatingBathroomVanities = new floatingBathroomVanities();
});

And("User navigates to Floating Bathroom Vanities Page", () => {
  HomePage.navigateToFloatingBathroomVanities();
});

When("User clicks to the Add to Cart button", () => {
  FloatingBathroomVanities.clickAddToCartButton();
});

Then(
  "User should be able to verify that the product is added to the shopping cart", function () {
    FloatingBathroomVanities.getCartCount().then((count) => {
      expect(count).to.eq(1);
  })
});

And("User clicks the delete icon", function () {
  FloatingBathroomVanities.deleteProductFromShoppingCart();
});

Then('The item should be deleted from the shopping cart', function () {
  FloatingBathroomVanities.verifyCartIsEmpty();
});
