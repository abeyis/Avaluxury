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

  Scenario: User searchs some products using Search box
    When Verify it is visible and clickable
    And User clicks search box
    And User types various terms and submits such as "32 Inch Light Oak & Anthracite Babylon Oscar"
    Then Verifies the search results contain "32 Inch Light Oak & Anthracite Babylon Oscar"

  Scenario: User can see product details on Floating Bathroom Page
    When User clicks on a product
    Then User vify product details are visible

  Scenario: User can use color filter to choose a product accordingly
    When User clicks on color button
    And Select a color
    Then Verifies the filter should show the product list of the selected product

    Scenario: User can use size filter to choose a product accordingly
    When User clicks on size button
    And Select a size
    Then Verifies the filter should show the product list of the selected product