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
  
  And ('User clicks Green colour', () => {
    singleVanitiesPage.clickGreenColour();
  })

  Then ('The page should display only the vanities which are green' , () => {
    singleVanitiesPage.getHeaderOfProduct1().should('contain.text', 'Green');
    singleVanitiesPage.getHeaderOfProduct2().should('contain.text', 'Green');
    singleVanitiesPage.getHeaderOfProduct3().should('contain.text', 'Green');
    singleVanitiesPage.getHeaderOfProduct4().should('contain.text', 'Green');
  })


  // Scenario: Size filter test

  And ('User clicks the Size Filter Button', () => {
    singleVanitiesPage.clickSizeButton();
  })

  And ('User clicks the size-18inch' , () => {
    singleVanitiesPage.clickSize18inch();
  })

  Then ('The page should display only the vanities with size-18inch' , () => {
    singleVanitiesPage.getHeaderOfProduct5().should('contain.text', '18 Inch');
    singleVanitiesPage.getHeaderOfProduct6().should('contain.text', '18 Inch');
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
      
          // Go back to the previous page
          cy.go('back');
        }
      });
  }
});




















