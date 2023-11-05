export class shopAllPage {
    
  clickColor() {
    cy.contains("span", "Color").click();
  }

  getColors() {
    cy.get("ul.gf-option-box button[data-fvalue]").then(
      ($buttons) => {
        const colors = [];
        $buttons.each((i, el) => {
          const color = Cypress.$(el).attr("data-fvalue");
          if (color) {
            if (color.includes("Inch")) {
              return false; //break the loop if it starts to get inch checkboxes
            }
            colors.push(color);
          }
        });
        cy.wrap(colors).as("colors");
      }
    );
  }

  selectRandomColor() {
    cy.get("@colors").then((colors) => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      const color = colors[randomIndex];
      cy.wrap(color).as("selectedColor");
      cy.wait(2000);
      cy.get(
        `ul.gf-option-box button[aria-checked="false"][data-fvalue="${color}"]`
      ).click({ force: true });
    });
  }
 
  addToCart(){
    cy.get('span')
  .filter(':contains("Add to cart")')
  .then(($elements) => {
    
    const randomIndex = Math.floor(Math.random() * $elements.length);
    const randomElement = $elements.eq(randomIndex);
    cy.wrap(randomElement).click();
  }); 
  }

  clickOnContinueShopping(){

    cy.contains('a.underlined-link', 'Continue shopping').click();

  }


  
}
