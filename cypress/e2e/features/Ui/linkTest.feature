
Feature: Web Page Link Testing

Background: User is on the home page
Given User navigates to Home Page

  Scenario: Test All Links on the Double Vanities Page
    Given User clicks to Double Bathroom Vanities
    When I test all links on the page
    Then I should see all links are working