Feature: Single Vanities Button Functionality

    Background: User is on the home page
        Given User navigates to Home Page

    Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page
        When User clicks to Single Vanities
        Then User verifies the page title is "Single Bathroom Vanities"


    # Scenario: Color filter test (green & black)
    #     When User clicks to Single Vanities
    #     And User clicks the Color Filter Button
    #     And User clicks Green colour
    #     And The page should display only the green vanities 
    #     And User clicks Black Color
    #     Then the page should display green and black vanities

   
    