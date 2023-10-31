Feature: Double Vanities

Background: User is on the home page
Given User navigates to Home Page

    Scenario: 
    When User clicks to Double Bathroom Vanities
    Then User verifies the page title is 'Double Bathroom Vanities'

    Scenario: Test All Links on the Double Vanities Page
    Given User clicks to Double Bathroom Vanities
    When I test all links on the page
    Then I should see all links are working
