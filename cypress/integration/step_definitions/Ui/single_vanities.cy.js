// Feature: Single Vanities Button Functionality

//   Background:
//       Given User navigates to Auluxury homepage

//   Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page and 
//             Single Bathroom Vanities page should show only single bathrooms
//       When the user clicks the Single Vanities Button
//       Then the URL should be "https://avaluxu.myshopify.com/collections/single-bathroom-vanities"
//       And the page should load without any errors or delays
//       Then the Single Vanities page should display only single bathroom vanities

import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";


let HomePage=null
before(()=>{
  HomePage =new homePage();
})


When('the user clicks the Single Vanities Button', () => {
    HomePage.clickSingleVanities()
  });

Then('the URL should be "https://avaluxu.myshopify.com/collections/single-bathroom-vanities"', () => {
 
  });


And ('the page should load without any errors or delays', () => {

  
});



Then ('the Single Vanities page should display only single bathroom vanities', () => {

  
});





