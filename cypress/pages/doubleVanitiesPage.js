
export class doubleVanitiesPage {

addToCart() {
    cy.get("span")
      .filter(':contains("Add to cart")')
      .then(($elements) => {
        const randomIndex = Math.floor(Math.random() * $elements.length);
        const randomElement = $elements.eq(randomIndex);
        cy.wrap(randomElement).click();
      });
  }

   continueShopping() {
    cy.contains("a.underlined-link", "Continue shopping").click();
  }

getEmailInput() {
  return cy.get('input[name="contact[email]"]');
}


enterValidEmail(email) {
  this.getEmailInput().type(email);
}

clickSubscribeButton() {
  cy.get('.newsletter-form__button').click({ force: true });
}

 locateEmailSubscriptionBox() {
  this.getEmailInput().scrollIntoView().should('be.visible');
}
}