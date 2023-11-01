Feature: Floating Bathroom Page

  Background: User is on the home page
    Given User navigates to Home Page    
    And User navigates to Floating Bathroom Vanities Page
    Then User verifies the page title is 'Floating Bathroom Vanities'

  Scenario: Add product/products to shopping cart
    
    When User clicks to the Add to Cart button
    Then User should be able to verify that the product is added to the shopping cart

  Scenario: Remove product/products from shopping cart
    When User clicks to the Add to Cart button
    And User clicks the delete icon
    Then The item should be deleted from the shopping cart

