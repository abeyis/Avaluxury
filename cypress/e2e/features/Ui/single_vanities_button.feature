Feature: Single Vanities Button Functionality

  Background:
      Given User navigates to Auluxury homepage

  Scenario: Clicking the "Single Vanities" button redirects to Single Bathroom Vanities page and Single Bathroom Vanities page should show only single bathrooms
      When the user clicks the Single Vanities Button
      Then the URL should be "https://avaluxu.myshopify.com/collections/single-bathroom-vanities"
      And the page should load without any errors or delays
      Then the Single Vanities page should display only single bathroom vanities

