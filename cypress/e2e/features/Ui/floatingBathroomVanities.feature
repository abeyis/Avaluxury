Feature: Floating Bathroom Page

  Background: User is on the home page
    Given User navigates to Home Page
    And User navigates to Floating Bathroom Vanities Page
    Then User verifies the page title is 'Floating Bathroom Vanities'

    Scenario: Add product/products to shopping cart
    When User clicks to the Add to Cart button
#     Then User should be able to verify that the product is added to my shopping cart and the cart's item count is updated accurately

   Scenario: Remove product/products from shopping cart
     Given User on the shopping cart
     When User click the delete button
     Then the item should be deleted from my shopping cart

