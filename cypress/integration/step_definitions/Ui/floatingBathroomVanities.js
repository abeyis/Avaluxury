
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { homePage } from "../../../pages/homePage";
import { floatingBathroomVanities } from "../../../pages/floatingBathroomVanities";

let HomePage = null;
let FloatingBathroomVanities = null;
let productQuantityBeforeDeleting = 0;

before(()=>{
  HomePage = new homePage();
  FloatingBathroomVanities = new floatingBathroomVanities();

})

And('User navigates to Floating Bathroom Vanities Page', () => {
    HomePage.navigateToFloatingBathroomVanities();
});

When('User clicks to the Add to Cart button', () => {
  FloatingBathroomVanities.clickAddToCartButton(); 
});

Given('User on the shopping cart', ()=> {
FloatingBathroomVanities.clickCartIcon();
cy.title().should('contain', 'Your Shopping Cart');

});

When('User click the delete button', function(){
  productQuantityBeforeDeleting = FloatingBathroomVanities.productQuantityAtShoppingCart();
  FloatingBathroomVanities.deleteProductFromShoppingCart();

});

Then('the item should be deleted from my shopping cart', function(){
 let productQuantityAfterDeleting = FloatingBathroomVanities.productQuantityAtShoppingCart();
 cy.log(productQuantityBeforeDeleting);
if(productQuantityBeforeDeleting === 0)
return 'your cart is empty'
else assert.notEqual(productQuantityAfterDeleting, productQuantityBeforeDeleting);


}) 

