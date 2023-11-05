export class floatingBathroomVanities {
  floatingVanitiesSelectors = {
    addToCart: ".spf-product__form-btn-addtocart",
    cartIcon: "#cart-icon-bubble",
    deleteIcon: ".button--tertiary",
    cartEpmtyText: ".cart__empty-text",
    searchBox: "input[class='gf-controls-search-input']",
    productTitle: "div[class='h4 spf-product-card__title']",
    cartCount: "div.cart-count-bubble span[aria-hidden='true']",
    noSuchProduct:
      "div[class='spf-col-xl-12 spf-col-lg-12 spf-col-md-12 spf-col-sm-12']",
  };

  productDetailsSelectors = {
    title: "div[class='product__title']",
    color: "h2[class='cbb-also-bought-title']",
    price: "span[class='price-item price-item--regular']",
    quantity: "input[class='quantity__input']",
    addToCart: "button[name='add']",
    description:
      "div[class='smart-tabs-navigation-li smart-tabs-navigation-li-active']",
    shippingAndReturn: "div.smart-tabs-navigation-wrapper div:nth-of-type(2)",
    review: "div.smart-tabs-navigation-wrapper div:nth-of-type(3)",
    viewStoreInformation: "#ShowPickupAvailabilityDrawer",
    buyWithShopPay: "div[data-testid='ShopifyPay-button']",
  };

  clickAddToCartButton() {
    cy.get(this.floatingVanitiesSelectors.addToCart).first().click();
  }

  clickCartIcon() {
    cy.get(this.floatingVanitiesSelectors.cartIcon).click();
  }

  deleteProductFromShoppingCart() {
    cy.get(this.floatingVanitiesSelectors.deleteIcon).click();
  }

  verifyCartIsEmpty() {
    cy.get(this.floatingVanitiesSelectors.cartEpmtyText)
      .invoke("text")
      .then((text) => {
        assert.equal(text, "Your cart is empty");
      });
  }

  getCartCount() {
    return cy
      .get(this.floatingVanitiesSelectors.cartCount)
      .invoke("text")
      .then((text) => {
        return parseInt(text);
      });
  }

  clickAddToCartButtonWithIndex(index) {
    cy.get(this.floatingVanitiesSelectors.addToCart).eq(index).click();
  }

  clickSearhBox() {
    cy.get(this.floatingVanitiesSelectors.searchBox).click();
  }

  verifySearchBoxVisibleAndClickable() {
    cy.get(this.floatingVanitiesSelectors.searchBox)
      .should("be.visible")
      .and("be.enabled");
  }

  searchProductOnFloatingVanitisPage(productDetail) {
    cy.get(this.floatingVanitiesSelectors.searchBox)
      .type(productDetail)
      .type("{enter}");
  }

  getProductTitle() {
    return cy
      .get(this.floatingVanitiesSelectors.productTitle)
      .invoke("text")
      .then((text) => {
        return text;
      });
  }

  verfyNoSuchProduct() {
    return cy
      .get(this.floatingVanitiesSelectors.noSuchProduct)
      .invoke("text")
      .then((text) => {
        return text;
      });
  }

  clickAProductRandomly() {
    return cy
      .get(this.floatingVanitiesSelectors.productTitle)
      .then(($products) => {
        let numbersOfProducts = $products.length;

        function getRandomNumber() {
          return Math.floor(Math.random() * numbersOfProducts);
        }
        const randomNum = getRandomNumber();
        console.log(randomNum);
        cy.get(this.floatingVanitiesSelectors.productTitle)
          .eq(randomNum)
          .click();
      });
  }

  verifyProductDetailsAreVisibleAndClickable() {
    cy.get(this.productDetailsSelectors.addToCart)
      .scrollIntoView()
      .should("be.visible")
      .and("be.enabled");

    cy.get(this.productDetailsSelectors.color)
      .scrollIntoView()
      .should("be.visible");

    cy.get(this.productDetailsSelectors.description)
      .scrollIntoView()
      .should("be.visible");

    cy.get(this.productDetailsSelectors.quantity)
      .scrollIntoView()
      .should("be.visible")
      .and("be.enabled");
    cy.get(this.productDetailsSelectors.review)
      .scrollIntoView()
      .should("be.visible");

    cy.get(this.productDetailsSelectors.price)
      .scrollIntoView()
      .should("be.visible");

    cy.get(this.productDetailsSelectors.shippingAndReturn)
      .scrollIntoView()
      .should("be.visible");
    cy.get(this.productDetailsSelectors.title)
      .scrollIntoView()
      .should("be.visible");
    cy.get(this.productDetailsSelectors.viewStoreInformation)
      .scrollIntoView()
      .should("be.visible")
      .and("be.enabled");
  }
}
