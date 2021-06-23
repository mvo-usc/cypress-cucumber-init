Feature: Basic homepage tests

  Scenario: As a default website visitor I want to see cookie banner in German
    When I visit "/"
    Then I should see cookie banner in German
