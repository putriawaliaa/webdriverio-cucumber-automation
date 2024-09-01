import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I login with valid credentials', async () => {
    await LoginPage.login('standard_user', 'secret_sauce');
});

Then('I should see the inventory page', async () => {
    await expect(InventoryPage.inventoryList).toBeExisting();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await browser.pause(10000);
});

Given('I am on the inventory page', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(InventoryPage.inventoryList).toBeExisting();
});

When('I add an item to the cart', async () => {
    await InventoryPage.addItemToCart();
});

Then('I should see the item in the cart', async () => {
    await InventoryPage.openCart();
    await browser.pause(10000);
    await expect($('div.cart_item')).toBeExisting();
});