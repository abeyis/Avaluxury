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

  // Scenario: Collection filter test
  //           When User clicks to Single Vanities
  //           And User clicks Collection Filter Button
  //           And User clicks the Single Bathroom Vanities
  //           Then The page should display only the Single vanities

  
  And ('User clicks Collection Filter Button' , () => {
    singleVanitiesPage.clickCollectionButton()
  })

  And ('User clicks the Single Bathroom Vanities' , () => {
    singleVanitiesPage.clickSingleBathroomVanitiesCollection()
  })
  
  
  Then ('The page should display only the Single vanities', () => {
 
    

    checkEveryProductOnThePage_oneByOne() {
    // Get a list of all products in the filtered page
      cy.get('a[translatable][href^="/products/"]').each(($productLink) => {
  
      // Click on each product link  
      cy.wrap($productLink).click();
  
      // check every product's header in the description of the product
      cy.get('div.post-content p[data-mce-fragment="1"]').should('contain.text', 'Single')
  
      // Go back to the previous page to click the next product
      cy.go('back');
    });
  };

})




















