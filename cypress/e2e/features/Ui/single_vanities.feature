Feature: Single Vanities 

    Background: User is on the home page
        Given User navigates to Home Page

        Scenario: "Single Vanities" button functionality test
            When User clicks to Single Vanities
            Then User verifies the page title is "Single Bathroom Vanities"

        Scenario: Color filter test 
           When User clicks to Single Vanities
           And User clicks the Color Filter Button
           And the user selects "Green" 
           Then the page should display only the vanities in the "Green" color
        
        # Scenario: Size filter test
        #     When User clicks to Single Vanities
        #     And User clicks the Size Filter Button
        #     Then User clicks all the sizes one by one and check if the page displays only the vanities with specific size
            

        Scenario: Collection filter test
            When User clicks to Single Vanities
            And User clicks Collection Filter Button
            And User clicks the Single Bathroom Vanities
            Then The page should display only the Single vanities

       



  

   
    