Feature: Single Vanities 

    Background: User is on the home page
        Given User navigates to Home Page

       @cloud
        Scenario: "Single Vanities" button functionality test
            When User clicks to Single Vanities
            Then User verifies the page title is "Single Bathroom Vanities"

        Scenario: Color filter test 
           When User clicks to Single Vanities
           And User clicks the Color Filter Button
           And the user selects "Green" 
           Then the page should display only the vanities in the "Green" color
        
        Scenario: Size filter test
            When User clicks to Single Vanities
            And User clicks the Size Filter Button
            And User selects "18 Inch"
            Then the page should display only the vanities which are size "18 Inch"
            
        Scenario: Collection filter test
            When User clicks to Single Vanities
            And User clicks Collection Filter Button
            And User clicks the Single Bathroom Vanities
            Then The page should display only the Single vanities

        Scenario: Search Box Test for Single Vanities Page
            When User clicks to Single Vanities
            And User types "oak" in the search box and press enter
            Then The page should display the products which contain the "oak" word in the product info

         Scenario: Add to Cart Button & Your Cart page functionality test
             When User clicks to Single Vanities
             And User clicks to random add-to-cart button 
             And it should direct to Your Cart page
             And the added product should appear in Your Cart page
             And user clicks to Check-Out Button
             Then it should direct to the Payment


