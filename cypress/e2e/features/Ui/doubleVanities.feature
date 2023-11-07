Feature: Double Vanities

    Background: User is on the home page
        Given User navigates to Home Page
    Scenario:
        When User clicks to Double Bathroom Vanities
        Then User verifies the page title is 'Double Bathroom Vanities'

    Scenario: Test All Links on the Double Vanities Page
        Given User clicks to Double Bathroom Vanities
        When I should see all links are working
    
     
    Scenario Outline: Select a color option
      Given User clicks to Double Bathroom Vanities
      When I visit the color selector page
      When I select a color option "<Color>"
      Then I should see that the selected color "<Color>" is checked
  
Examples:
  | Color      |
  | Gray       |
  | Green      |
  | Black      |
  | Dark Oak   |
  | Light Oak  |
  | White      |
  | High Gloss Black |
  | Matte Dust Gray |
  | Navy Blue  |
  | High Gloss Capuccino |
  | High Gloss White |
  | Matte Cashmere |
  | High Gloss Anthracite|

Scenario:Add Double Bathroom Vanities to the shopping cart
        Given User clicks to Double Bathroom Vanities
        Then User clicks on random Add to Cart
        And User clicks on Continue Shopping
        And User verifies they are on the all page
     @Test    
Scenario: Subscribe Our Email 
    Given User clicks to Double Bathroom Vanities
    When I locate the email subscription box at the bottom of the website
    Then I enter a valid email address
    And I click the subscribe button
   