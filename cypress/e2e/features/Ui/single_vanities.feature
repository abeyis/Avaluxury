Feature: Single Vanities Button Functionality

    Background: User is on the home page
        Given User navigates to Home Page

    Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page
        When User clicks to Single Vanities
        Then User verifies the page title is "Single Bathroom Vanities"


  

   
    















    Scenario: Search Box Test for Single Vanities Page
        When User clicks to Single Vanities
        And User types "oak" in the search box and press enter
        Then The page should display the products which contain the "oak" word in the product info
