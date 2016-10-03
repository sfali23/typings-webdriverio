Feature: Simple Google search
    As a developer
    I want to demo simple Google search

    Scenario: Search Google for "webdriverio"
       Given  I open the url "http://www.google.com/ncr"
       Then   I expect that inputfield "//input[@name='q']" does not contain any text
       When   I set "webdriverio" to the inputfield "//input[@name='q']"
       Then   I expect that inputfield "//input[@name='q']" does contain any text
       And    I expect that inputfield "//input[@name='q']" contains the text "webdriverio"
       When   I pause for 1000ms
       And    I click on the button "//button[@name='btnG']"
       Then   I expect that the title is "webdriverio - Google Search"
