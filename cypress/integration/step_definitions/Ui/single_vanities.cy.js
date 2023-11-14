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
