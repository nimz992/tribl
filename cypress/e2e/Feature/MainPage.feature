Feature: Visiting Tribl

    Scenario: User Log-in
        Given User will navigate to Tribl page
        Then Page should have title 'Tribl'
        And User Click Login Button
        And User type email and passowrd
        Then User Logged-in

    Scenario: Add Links
        Given User will navigate to Tribl page
        Then Page should have title 'Tribl'
        And User Click Login Button
        And User type email and passowrd
        Then User Logged-in
        Then User clicks on Add block
        Then User click on link
        Then User add random link
        Then User click on Add button
