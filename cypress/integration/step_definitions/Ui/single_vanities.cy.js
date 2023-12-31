
// Feature: Single Vanities Button Functionality

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { SingleVanitiesPage } from "../../../pages/single_vanities_page";


let HomePage=null
before(()=>{
    HomePage =new homePage();
})

When('User clicks to Single Vanities', () => {
    HomePage.clickSingleVanities();
});

let singleVanitiesPage=null
before(()=>{
    singleVanitiesPage =new SingleVanitiesPage();
})


//Color filter test

  And ('User clicks the Color Filter Button', () => {
    singleVanitiesPage.clickColorButton();
  });


  And('the user selects {string}', (selected_color) =>{
    singleVanitiesPage.selectColor(selected_color);
  })

  Then('the page should display only the vanities in the {string} color', (selected_color) => {
      
    singleVanitiesPage.getProductsInThePage().each((productTitle) => {
      const productName = productTitle.find('a').text();
    
      if (productName.includes(selected_color)) {
        cy.wrap(productName).should('contain', selected_color);
      }
    });
  
  });
    

  // Scenario: Size filter test

  And ('User clicks the Size Filter Button', () => {
    singleVanitiesPage.clickSizeButton();
  })

  And ('User selects {string}', (selected_size) =>{
    singleVanitiesPage.selectSize(selected_size);
  }) 

  Then ('the page should display only the vanities which are size {string}',(selected_size) =>{
    singleVanitiesPage.getProductsInThePage().each((productTitle) => {
      const productName = productTitle.find('a').text();

      if (productName.includes(selected_size)) {
        cy.wrap(productName).should('contain', selected_size);
      }
    });
  } )

  
// Scenario : Collection filter test
  
And ('User clicks Collection Filter Button' , () => {
  singleVanitiesPage.clickCollectionButton()
})


And ('User clicks the Single Bathroom Vanities' , () => {
  singleVanitiesPage.clickSingleBathroomVanitiesCollection()
})


Then('The page should display only the Single vanities', () => {
  
  function checkProduct(singleKeyword) {
    
    cy.get(singleVanitiesPage.productTitle).each(($productTitle) => {
      const titleText = $productTitle.text();
    
      if (titleText.should('contain','Single')) {
    
      } else {
        cy.wrap($productTitle).click();
    
        cy.get(singleVanitiesPage.$productDescription).each(($productDescription) => {
          const descriptionText = $productDescription.text();
    
          if (descriptionText.should('contain','Single')) {
          } else {
          }

        });
    
        cy.go('back');
      }
    });
}
});

// Scenario: Search Box Test

And ('User types {string} in the search box and press enter' , (search_word) => {
  singleVanitiesPage.clickSearchBox_and_typeSearchWord (search_word) 
})

Then ('The page should display the products which contain the {string} word in the product info', (search_word) => {
  singleVanitiesPage.getProductsInThePage().each((productTitle) => {
      const productName = productTitle.find('a').text();
    
      if (productName.includes(search_word)) {
        cy.wrap(productName).should('contain', search_word);
      }
  });
});


//Scenario: Add to Cart Button & Your Cart page functionality test


And ('User clicks to random add-to-cart button' , () =>{
    singleVanitiesPage.addToCartRandomProduct() 
})

And('it should direct to Your Cart page', () => {

    const expectedTitle = 'Your Shopping Cart'; 
    cy.title().should('contain', expectedTitle);
  }); 

And ('the added product should appear in Your Cart page' , () => {  
   
    const addedProduct = '.cart-item'; 
    cy.get(addedProduct).should('exist');
});

And ('user clicks to Check-Out Button' , () => {
    singleVanitiesPage.clickCheckOutButton()
})

Then ('it should direct to the Payment' , () => {
    const expectedTitle = 'Checkout - Avaluxury'; 
    cy.title().should('contain', expectedTitle);
})























