import { When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { floatingBathroomVanities } from "../../../pages/floatingBathroomVanities";

let HomePage = null;
let FloatingBathroomVanities = null;

before(() => {
  HomePage = new homePage();
  FloatingBathroomVanities = new floatingBathroomVanities();
});

And("User navigates to Floating Bathroom Vanities Page", () => {
  HomePage.clickFloatingBathroomVainities();
});

When("User clicks to the Add to Cart button", () => {
  FloatingBathroomVanities.clickAddToCartButton();
});

Then(
  "User should be able to verify that the product is added to the shopping cart",
  function () {
    FloatingBathroomVanities.getCartCount().then((count) => {
      expect(count).to.eq(1);
    });
  }
);

And("User clicks the delete icon", function () {
  FloatingBathroomVanities.deleteProductFromShoppingCart();
});

Then("The item should be deleted from the shopping cart", function () {
  FloatingBathroomVanities.verifyCartIsEmpty();
});

And("User clicks search box", function () {
  FloatingBathroomVanities.clickSearhBox();
});

When("Verify it is visible and clickable", function () {
  FloatingBathroomVanities.verifySearchBoxVisibleAndClickable();
});

And(
  "User types various terms and submits such as {string}",
  function (productDetail) {
    FloatingBathroomVanities.searchProductOnFloatingVanitisPage(productDetail);
  }
);

Then("Verifies the search results contain {string}", function (searchTerm) {
  FloatingBathroomVanities.getProductTitle().then((productTitle) => {
    expect(productTitle).to.contain(searchTerm);
  });
});
