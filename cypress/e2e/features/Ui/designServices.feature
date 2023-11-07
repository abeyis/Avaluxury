
Feature: Design Services

    Background: User is on the home page
        Given User navigates to Home Page

    Scenario: Design Services Tab
        When User clicks to Design Services
        Then User verifies the page title is 'Design Services'

    Scenario: View All Our Recent Product Tab
        When User clicks to Design Services
        And User clicks to View All Our Recent Products
        Then User verifies the page title is 'Shop All'

            """
    Scenario: Lets Work Together Section
        When User clicks to Design Services
        And User fills all necassary fields
        Then User clicks summit button
        Then User verifies success message
            """
