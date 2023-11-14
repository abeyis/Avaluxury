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

            """
    Scenario: product search box control
        When the user clicks on the search box
        And the user chooses "Gray Selena" the product
        Then the user should only see the selected "Gray Selena" product

    Scenario: controlling the number of shows
        When the user clicks on the introduction box
        Then the user should see "32" product numbers
        Then the user must be able to select "32" the number of shows

    Scenario Outline:
        When the user clicks on the "<sort>" box
        And all the sort variants of the user must be seen
        Then the user should be able to select the desired sort list
        Examples:
            | sort                |
            | Relevance           |
            | Availability        |
            | Best Selling        |
            | Alphabetically, A-Z |
            | Alphabetically, Z-A |
            | Price, low to high  |
            | Price, high to low  |
            | Date, new to old    |
            | Date, old to new    |
            | Sale off            |

    Scenario: checking the listed product list
        When the user sees the details of each product listed with pictures
        And the user should be able to click on the products
        Then the user should be redirected to the detail page of the product

    Scenario: checking the add to cart box
        When the user clicks the add to cart box
        And the user should be able to see the products added to the cart
        Then the user should be able to continue shopping if they want
            """


