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
