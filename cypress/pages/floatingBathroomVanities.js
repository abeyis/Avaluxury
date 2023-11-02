export class floatingBathroomVanities {
  floatingVanitiesSelectors = {
    addToCart: ".spf-product__form-btn-addtocart",
    cartIcon: "#cart-icon-bubble",
    deleteIcon: ".button--tertiary",
    cartEpmtyText: ".cart__empty-text",
    searchBox: "input[class='gf-controls-search-input']",
    productTitle: "div[class='h4 spf-product-card__title']",
    cartCount: "div.cart-count-bubble span[aria-hidden='true']",
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
    return (
      cy
        // .get('div.cart-count-bubble span[aria-hidden="true"]')
        .get(this.floatingVanitiesSelectors.cartCount)
        .invoke("text")
        .then((text) => {
          return parseInt(text);
        })
    );
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
}
