Feature: Double Vanities

Background: User is on the home page
Given User navigates to Home Page

    Scenario: 
    When User clicks to Double Bathroom Vanities
    Then User verifies the page title is 'Double Bathroom Vanities'

    Scenario: Test All Links on the Double Vanities Page
    Given User clicks to Double Bathroom Vanities
    When I should see all links are working

  Scenario Outline: Perform a search with different terms
    Given User clicks to Double Bathroom Vanities
    When I enter "<searchTerm>" into the search box
    Then I should see search results for "<searchTerm>"

    Examples:
      | searchTerm    |
      | White Selena  |
      | Navy Blue     |
      | Matte Dust          |
      | High Gloss          |
      | Green Selena        |
      | Matte Cashmere      |
      | Light Oak           |
      | Dark Oak            |
      | Ayasofya            |
      | Aspendos            |
      | Gray Selena         |
