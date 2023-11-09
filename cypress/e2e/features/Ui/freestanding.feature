Feature: Freestanding

    Background: User is on the home page
        Given User navigates to Home Page

    @smoke
    Scenario:
        When User clicks to Double Bathroom Vanities
        Then User verifies the page title is 'Freestanding Bathroom Vanities'

    Scenario: color check
        When user goes to freestanding vanities page
        And user picks "Beechwood" as color
        Then user should see only "Beechwood" products

    Scenario: user size control
        When the user clicks on the size
        And the user must see "18 Inch" all dimensions
        Then the user should be "18 Inch" able to select the size
