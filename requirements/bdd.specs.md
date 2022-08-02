Feature: Register users  and give them a bonus

  As a developer I want to provide my e-mail  and name and get my bonus

  Scenario: Valid e-mail and name
    Given the value entered in the e-mail box is a valid e-mail
   
    And the value entered in the name box is a valid name
    When the user requests to be registered
    
   The developer receives his bonus