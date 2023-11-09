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
  cy.get(FloatingBathroomVanities.floatingVanitiesSelectors.productTitle).then(
    ($productTitle) => {
      if ($productTitle.length > 0) {
        FloatingBathroomVanities.getProductTitle().then((productTitle) => {
          expect(productTitle).to.contain(searchTerm);
        });
      } else {
        FloatingBathroomVanities.verfyNoSuchProduct().then((text) => {
          let warningNote = "Sorry, there are no products in this collection";
          expect(text).to.contain(warningNote);
        });
      }
    }
  );
});

When("User clicks on a product", function () {
  FloatingBathroomVanities.clickAProductRandomly();
});

Then("User vify product details are visible", function () {
  FloatingBathroomVanities.verifyProductDetailsAreVisibleAndClickable();
});

When("User clicks on color button", function () {
  FloatingBathroomVanities.clickColorButton();
});

And("Select a color", function () {
  FloatingBathroomVanities.SelectAColorRandomly();
});

Then(
  "Verifies the filter should show the product list of the selected product",
  function () {
    let listedProductTitle;
    let selectedProduct;

    return FloatingBathroomVanities.getSelectedProduct().then((product) => {
      selectedProduct = product;
      return FloatingBathroomVanities.getProductTitle().then((title) => {
        listedProductTitle = title;
        expect(listedProductTitle).to.contain(selectedProduct);
      });
    });
  });

  When("User clicks on size button", function(){
FloatingBathroomVanities.clickColorButton();

  });


  And("Select a size", function(){
FloatingBathroomVanities.selectASizeRandomly();

  });





