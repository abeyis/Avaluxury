
Feature: Contact

    Background: User is on the home page
        Given User navigates to Home Page

    Scenario: Contact Tab
        When User clicks to Contact
        Then User verifies the page title is 'Contact'

    Scenario: Send Message
        When User clicks to Contact
        When User fills mecassary information
        And User clicks send button

            """
    Scenario: Subscribe Our Email
        When User clicks to Contact
        And User enters valid email address
        Then User verifies the success message
            """