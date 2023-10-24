Feature: Single Vanities Button Functionality

  Background:
    Given User navigates to Auluxury homepage

  Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page
    When the user clicks the Single Vanities Button
    Then the URL should be "https://avaluxu.myshopify.com/collections/single-bathroom-vanities"
    And the page should load without any errors or delays

  Scenario: Single Bathroom Vanities page should show only single bathrooms
    Given the user is on the Single Bathroom Vanities page
    Then the page should display only single bathroom vanities

