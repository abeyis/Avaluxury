

export class doubleVanitiesPage {
  

    visitColorSelectorPage() {
    cy.get('span:contains("Color")').each(($el) => {
      cy.wrap($el).click();
    });
  }

    selectColorOption(selectedColor) {
        cy.get(`button[title="${selectedColor}"]`).click();
      }
    
    

    checkSelectedColorIsChecked(selectedColor) {
        cy.get(`button[title="${selectedColor}"]`).should('have.attr', 'aria-checked', 'true');
      }
}