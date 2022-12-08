Feature: Booking app automation

  Scenario Outline: As user, i want to use the booking service

  Scenario: Stays view
    Given The user is in the stays view
    Then The user must see the destination options

  Scenario: Enter Destination
    Given The user is on the destination option
    When The user enter his destination <destiny>
    Examples:
      | destiny |
      | Cusco   |
  Scenario: Enter date range
    Given The user is on the date view
    When The user specify the range of days: <start> - <end> - of <monthYear>
    Then The user see the range of days specified on the stays view: <dateLabel>
    Examples:
      | start | end | monthYear     | dateLabel                 |
      | 15    | 18  | February 2023 | Wed, Feb 15 - Sat, Feb 18 |
  Scenario: Enter the guests
    Given The user is on the Select rooms and guests view
    When The user select the <age> of his child
    Then The user see the rooms and guests that he has specified: <roomsGuestsLabel>
    Examples:
      | age | roomsGuestsLabel            |
      | 5   | 1 room · 2 adults · 1 child |
  Scenario: Fill the user data
    Given The user is on the form view
    When The user fill the inputs with his personal data: <firstName> - <lastName> - <email> - <address> - <zipCode> - <city> - <country> - <mobilePhone>
    Examples:
      | firstName | lastName | email              | address    | zipCode | city | country | mobilePhone |
      | Miguel    | Corrales | miguel22@gmail.com | Miraflores | 15046   | Lima | Peru    | 972 123 455 |
  Scenario: Final Step
    Given The user is on the final step of the form
    When I have to fill the form with my credit card info: <cardNumber> - <cardType> - <expirationDate> - <cvcCode>
  Examples:
    | cardNumber       | cardType | expirationDate | cvcCode |
    | 1234567891245789 | Visa     | 05/25          | 123     |

