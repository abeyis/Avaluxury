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


 




















