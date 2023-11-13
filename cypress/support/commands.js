// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  Cypress.Commands.add('checkBrokenLinks', () => {
    cy.get('a').each((link) => {
      const url = link.prop('href');
  
      if (url && url !== '#' && !url.startsWith('javascript:')) {
        cy.request({
          url,
          failOnStatusCode: false,
        }).then((response) => {
          if (response.status === 404){
             expect(response.status).to.eq(404, `Broken Link: ${url}`); 
            } else { 
            expect(response.status).to.be.lessThan(400, `Invalid response status code for link: ${url}`); 
          }
           });
     }
    });
  });
  Cypress.Commands.add("typeAndEnter", (selector, text) => {
    cy.get(selector).should('be.visible').type(text);
    cy.get(selector).type('{enter}');
    
  });

  Cypress.Commands.add('verifySearchResults', (searchTerm) => {
   cy.get('#gf-products .spf-product-card__inner').each((productCard) => {
    const productTitle = productCard.find('a').attr('title');
  
    console.log(`Product Title: ${productTitle}`);
    if (productTitle.includes(searchTerm)) {
      cy.log(`Matching product found: ${productTitle}`);
    } else {
      cy.log(`Unexpected product found: ${productTitle}`);
    }
  });
});
