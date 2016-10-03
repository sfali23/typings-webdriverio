Feature: Demo App title test
    As a developer
    I want the demo app have the correct title

    Background:
        Given I open the url "http://www.tlkeith.com/WebDriverIOTutorialTest.html"

    Scenario: Is not Google
        Then I expect that the title is not "Google"

    Scenario: Is correct
        Then I expect that the title is "Web Driver IO - Tutorial Test Page"

    Scenario: addValue
        When I scroll to element "#fname" to offset "0" and "-50"
        And  I set "Syed" to the inputfield "#fname"
        Then I expect that inputfield "#fname" contains the text "Syed"
        And  I pause for 3000ms
        When I add " Farhan" to the inputfield "#fname"
        Then I expect that inputfield "#fname" contains the text "Syed Farhan"
        And  I pause for 3000ms
