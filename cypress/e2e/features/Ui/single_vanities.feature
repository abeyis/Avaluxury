Feature: Single Vanities Button Functionality

    Background: User is on the home page
        Given User navigates to Home Page

    @cloud
    Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page
        When User clicks to Single Vanities
        Then User verifies the page title is "Single Bathroom Vanities"


























    Scenario: Add to Cart Button & Your Cart page functionality test
        When User clicks to Single Vanities
        And User clicks to random add-to-cart button 
        Then User verifies the page title is "Your Shopping Cart"
        And the added product should appear in Your Cart page
        And user clicks to Check-Out Button
        Then User verifies the page title is "Checkout - Avaluxury"


