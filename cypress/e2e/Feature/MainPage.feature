Feature: Visiting Tribl

    Scenario: Home Page
        Given User will navigate to Tribl page
        Then Page should have title 'Tribl'
        And User Click Login Button
        And User type email and passowrd
        Then User Logged-in