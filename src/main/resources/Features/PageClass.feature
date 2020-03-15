Feature: Sample feature name
  Scenario: Open webpage
    Given I Open "https://google.com"
    When I see search for "selenium" keyword
    Then I should verify page's title

 Scenario Outline: Open webpages
    Given I Open "<browserName>"
    When I see search for "selenium" keyword
    Then I should verify page's title
   Examples:
   |browserName        |
   |https://google.com |
   |https://google.com |
   |https://google.com |

   @one
   Scenario: Verify amazon search functionality
     Given I Open "https://amazon.com"
     When I Enter search keyword "iphone"
     Then I should verify page's title