"use strict";
class WarehouseLocation {
    constructor(address) {
        this.address = address;
    }
    get getAddress() {
        return this.address;
    }
    get StockItem() {
        return this.item;
    }
    set StockItem(item) {
        this.item = item;
    }
}
let myItem = { itemName: "Bananas", quantity: 5 };
let myWarehouse = new WarehouseLocation("Battle Ground, WA 98604");
myWarehouse.StockItem = myItem;
console.log(`name=${myWarehouse.StockItem.itemName}, quantity=${myWarehouse.StockItem.quantity}`);
