Feature: Single Vanities 

    Background: User is on the home page
        Given User navigates to Home Page

        Scenario: "Single Vanities" button functionality test
            When User clicks to Single Vanities
            Then User verifies the page title is "Single Bathroom Vanities"

        Scenario: Color filter test 
            When User clicks to Single Vanities
            And User clicks the Color Filter Button
            And User clicks Green colour
            Then The page should display only the vanities which are green 

        # Scenario: Size filter test
        #     When User clicks to Single Vanities
        #     And User clicks the Size Filter Button
        #     And User clicks the size-18inch
        #     Then The page should display only the vanities with size-18inch

        # Scenario: Collection filter test
        #     When User clicks to Single Vanities
        #     And User clicks Collection Filter Button
        #     And User clicks the Single Bathroom Vanities
        #     Then The page should display only the Single vanities

        # Scenario: Price filter test
        #     When User clicks to Single Vanities
        #     And User clicks Price Filter Button
        #     And User selects a price range between $520-$820 
        #     Then The page should display only the vanities in the specific price range



  

   
    