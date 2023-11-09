
Feature: Size 




Background: User is on the home page
Given User navigates to Home Page

    @cloud
    Scenario Outline: Size Tab
    When User clicks to size tab 
    And User chooses "<size>" from list
    Then User verifies the result page cantains only items with "<size>"
    Then User verifies the result page url contains "<size>"
    Examples:
    | size| 
    | 18  | 
    | 24  | 
    | 30  |
    | 32  | 
    | 36  | 
    | 40  |
    | 48  | 
    | 60  | 
    | 67  | 
    | 72  |

