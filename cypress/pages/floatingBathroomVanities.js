
export class floatingBathroomVanities {
    
  floatingVanitiesSelectors = {
    addToCart:"div[class='spf-product-card spf-product-card__left spf-product-card__template-2']",
    cartIcon: "#cart-icon-bubble",
    

  };

  clickAddToCartButton() {
      cy.get(this.floatingVanitiesSelectors.addToCart).click();
  };

  clickCartIcon() {
    cy.get(this.floatingVanitiesSelectors.cartIcon).click();
  };

  deleteProductFromShoppingCart(){
    const element = document.getElementsByClassName('cart__empty-text');
    if (element) {
        return 'Your cart is empty'
    } else {
        const deleteIcon = document.querySelectorAll('a[aria-label]')[1];
        deleteIcon.click();
    }

};

productQuantityAtShoppingCart(){
    const element = document.getElementsByClassName('cart-count-bubble');
    if (element) {
        const elementText = element.textContent;
    return elementText;
    } else {
        
    return 0;
    }
    
        
}



}
