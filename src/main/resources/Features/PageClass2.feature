Feature: Sample feature name
  Scenario: Open webpage
    Given I Open "https://google.com"
    When I see search for "selenium" keyword
    Then I should verify page's title

@one
 Scenario Outline: Open webpages
    Given I Open "<browserName>"
    #When I see search for "selenium" keyword
    Then I should verify page's title
   Examples:
   |browserName        |
   |https://google.com |
   |https://amazon.com |
   |https://youtube.com |