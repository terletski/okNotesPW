@basket
Feature: Basket validation

  Background:
    Given User navigates to the "OK-Notes" application
    When I click on "Login link" element
    And I login with "test" user
    And I add "1" item with out discount to basket
    And I clean basket if not empty
    Then I should see "Basket Count item" with "0" count

  @testCase1 @bug
  Scenario: Test Case 1. Go to the empty basket
    When User navigates to the "OK-Notes" application
    And I click on "Basket icon" element
    Then I should see "Basket window" element
    When I click on "Go To Basket button" element
    Then I should be on "Basket" page

  @testCase2
  Scenario: Test case 2. Go to the basket with out discount item
    When I add "1" item with out discount to basket
    Then I should see "Basket Count item" with "1" count
    And I click on "Basket icon" element
    Then I should see "Item price" for "1" item in the basket
    And I should see "Item title" for "1" item in the basket
    And I should see "Total price" for "1" item in the basket
    When I click on "Go To Basket button" element
    Then I should be on "Basket" page

  @testCase3
  Scenario: Test case 3. Go to the basket with discount item
    When I add "1" item with discount to basket
    Then I should see "Basket Count item" with "1" count
    And I click on "Basket icon" element
    Then I should see "Item price" for "1" item in the basket
    And I should see "Item title" for "1" item in the basket
    And I should see "Total price" for "1" item in the basket
    When I click on "Go To Basket button" element
    Then I should be on "Basket" page

  @testCase4 @bug
  Scenario: Test case 4. Go to the basket with 8 different items
    Given I add "1" item with discount to basket
    Then I should see "Basket Count item" with "1" count
    When I add "5" different items with out discount to basket
    And I add "3" different items with discount to basket
    Then I should see "Basket Count item" with "9" count
    When I click on "Basket icon" element
    Then I should see "Item price" for "8" items in the basket
    And I should see "Item title" for "8" items in the basket
    And I should see "Total price" for "1" items in the basket
    When I click on "Go To Basket button" element
    Then I should be on "Basket" page

  @testCase5 @bug
  Scenario: Test case 5. Go to the basket with 9 the same items and discount
    When I add "9" same items with discount to basket
    Then I should see "Basket Count item" with "9" count
    When I click on "Basket icon" element
    Then I should see "Item price" for "1" item in the basket
    And I should see "Item title" for "1" item in the basket
    And I should see "Total price" for "1" items in the basket
    When I click on "Go To Basket button" element
    Then I should be on "Basket" page
