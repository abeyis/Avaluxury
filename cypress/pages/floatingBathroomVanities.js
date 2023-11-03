export class floatingBathroomVanities {
  floatingVanitiesSelectors = {
    addToCart: ".spf-product__form-btn-addtocart",
    cartIcon: "#cart-icon-bubble",
    deleteIcon: ".button--tertiary",
    cartEpmtyText: ".cart__empty-text"

    
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
    cy.get('.cart__empty-text').invoke('text').then((text) => {
     
      assert.equal(text, 'Your cart is empty');
  });   
  };

  getCartCount() {
    return cy.get('div.cart-count-bubble span[aria-hidden="true"]').invoke('text').then((text) => {
      return parseInt(text);
    });
  };

  clickAddToCartButtonWithIndex(index) {
    cy.get(this.floatingVanitiesSelectors.addToCart).eq(index).click();
  };







}
