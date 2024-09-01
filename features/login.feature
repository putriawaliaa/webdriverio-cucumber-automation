Feature: User Login and Add Item to Cart

  Scenario: User success login
    Given I am on the login page
    When I login with valid credentials
    Then I should see the inventory page

  Scenario: Add item to cart
    Given I am on the inventory page
    When I add an item to the cart
    Then I should see the item in the cart