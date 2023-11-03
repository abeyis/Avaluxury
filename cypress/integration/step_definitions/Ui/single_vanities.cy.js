import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { SingleVanitiesPage} from "../../../pages/single_vanities_page";
 
//Scenario: Single Vanities Button Functionality

let HomePage=null
before(()=>{
    HomePage =new homePage();
})

When('User clicks to Single Vanities', () => {
    HomePage.clickSingleVanities();
});
   


// Scenario: Color filter test 

let singleVanitiesPage=null
before(()=>{
    singleVanitiesPage =new SingleVanitiesPage();
})


  And ('User clicks the Color Filter Button', () => {
    singleVanitiesPage.clickColorButton();
  });
  

  Then ('User clicks all the colours one by one and check if the page displays only the vanities which are in the specific colour' , () => {
    
    cy.get('button[data-fid][data-fvalue][title] span.gf-option-one-color').each(($colorButton) => {
      const colorName = $colorButton.attr('title');
    
      cy.wrap($colorButton).click();
    
      cy.get('.h4.spf-product-card__title').should('be.visible').each(($productTitle) => {
        const titleText = $productTitle.text();
    
        expect(titleText).to.contain(colorName);
      } );
    
       cy.go('back'); 
    });
  })



  // Scenario: Size filter test

  And ('User clicks the Size Filter Button', () => {
    singleVanitiesPage.clickSizeButton();
  })


  Then ('User clicks all the sizes one by one and check if the page displays only the vanities with specific size' , () => {
    
    cy.get('button[data-fid^="98949"][data-fvalue][title]').each(($sizeButton) => {
      const sizeName = $sizeButton.attr('data-fvalue');
    
      cy.wrap($sizeButton).click();
    
      cy.get('.h4.spf-product-card__title').should('be.visible').each(($productTitle) => {
        const titleText = $productTitle.text();
    
        expect(titleText).to.contain(sizeName);
      });
    
      cy.go('back');
    });
  })


  
  // Scenario : Collection filter test
  
  And ('User clicks Collection Filter Button' , () => {
    singleVanitiesPage.clickCollectionButton()
  })


  And ('User clicks the Single Bathroom Vanities' , () => {
    singleVanitiesPage.clickSingleBathroomVanitiesCollection()
  })
  
  
  Then('The page should display only the Single vanities', () => {
    
    function checkProduct(singleKeyword) {
      
      cy.get('.h4.spf-product-card__title').each(($productTitle) => {
        const titleText = $productTitle.text();
      
        if (titleText.includes('Single')) {
          cy.log('Test is passed');
      
        } else {
          cy.wrap($productTitle).click();
      
          cy.get('p[data-mce-fragment="1"]').each(($productDescription) => {
            const descriptionText = $productDescription.text();
      
            if (descriptionText.includes('Single')) {
              cy.log('Test is passed');
            } else {
              cy.log('Test is failed, there is a bug');
            }
          });
      
          cy.go('back');
        }
      });
  }
});





















