Feature: ShopAll page scenarios

    Background: User is on the home page
        Given User navigates to Home Page

    Scenario: Navigating to shop all page
        When User clicks to Shop All
        Then User verifies the page title is 'Shop All'
    @cloud
    Scenario: Select a color and filter products
        When User clicks to Shop All
        And User clicks on color
        When User gets all available colors
        And User selects a random color
        Then User filters products by the selected color
        And User clicks on random Add to Cart
        Then User should be able to verify that the product is added to the shopping cart
        And User clicks on Continue Shopping
        And User verifies they are on the all page
