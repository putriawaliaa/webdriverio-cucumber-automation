import Page from './page.js';

class InventoryPage extends Page {
    get inventoryList() { return $('.inventory_list'); }
    get addToCartButton() { return $('button[name="add-to-cart-sauce-labs-backpack"]'); }
    get cartIcon() { return $('.shopping_cart_link'); }

    async addItemToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();