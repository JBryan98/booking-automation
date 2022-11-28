Feature: The Internet Guinea Pig Website

  Scenario Outline: As user, i want use the booking service

    Given I select my destiny <destiny>
    When I write the range of days: <start> - <end> - of <monthYear>
    When I put the age of my child <age>
    When I choose my stay 
    When I select my room and put my personal info: <firstName> - <lastName> - <email> - <address> - <zipCode> - <city> - <country> - <mobilePhone>
    When I am on the finish booking page i put my credit card info: <cardNumber> - <cardType> - <expirationDate> - <cvcCode>

    Examples:
      | destiny      | start | end | monthYear     | age | firstName | lastName | email              | address    | zipCode | city | country | mobilePhone | cardNumber       | cardType | expirationDate | cvcCode |
      | Machu Picchu | 15    | 18  | February 2023 | 5   | Miguel    | Corrales | miguel22@gmail.com | Casuarinas | 02002   | Lima | Peru    | 998 123 756 | 1234567891245789 | Visa     | 05/25          | 123     |

