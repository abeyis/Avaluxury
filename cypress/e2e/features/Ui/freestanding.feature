Feature: Freestanding

    Background: User is on the home page
        Given User navigates to Home Page

    @smoke
    Scenario:
        When User clicks to Freestanding Bathroom Vanities
        Then User verifies the page title is 'Freestanding Bathroom Vanities'

    Scenario: color check
        When User clicks to Freestanding Bathroom Vanities
        And user picks "Beechwood" as color
        Then user should see only "Beechwood" products

    Scenario: user size control
        When User clicks to Freestanding Bathroom Vanities
        Then the user must see "18 Inch" all dimensions
        And the user should be "18 Inch" able to select the size
