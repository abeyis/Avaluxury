

// Feature: Single Vanities Button Functionality

import { Given, When } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { SingeVanitiesPage } from "../../../pages/single_vanities_page";


let HomePage=null
before(()=>{
    HomePage =new homePage();
})

When('User clicks to Single Vanities', () => {
    HomePage.clickSingleVanities();
});
   


//Scenario: Add to Cart Button & Your Cart page functionality test

let singleVanitiesPage=null
before(()=>{
    singleVanitiesPage =new SingleVanitiesPage();
})

And ('User clicks to random add-to-cart button' , () =>{
    singleVanitiesPage.addToCartRandomProduct() 
})


And ('the added product should appear in Your Cart page' , () => {  
   
    const addedProduct = '.cart-item'; 
    cy.get(addedProduct).should('exist');
});

And ('user clicks to Check-Out Button' , () => {
    singleVanitiesPage.clickCheckOutButton()
})


