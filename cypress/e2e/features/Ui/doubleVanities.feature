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
    Then I should see "<expectedResultCount>" results for "<searchTerm>"

    Examples:
      |searchTerm         |expectedResultCount|    
      |White Selena Double| 3                 |
      |Navy Blue Selena   | 3                  |
      |Matte Dust         | 1                  |
      |High Gloss         | 4                  |  
      |Green Selena       | 3                  |
      |Matte Cashmere     | 1                  |
      |Light Oak          | 1                  |
      |Dark Oak           | 1                  |
      |Ayasofya           | 1                  |
      |Aspendos           | 1                  |
      |Gray Selena        | 3                  |
