interface StockItem{
    itemName:string;
    quantity:number;
}
class WarehouseLocation{
    private address:string;
    private item:any;
    constructor(address:string){
        this.address=address;
    }
    get getAddress():string{
        return this.address;
    }
    get StockItem(){
        return this.item;
    }
    set StockItem(item:StockItem){
        this.item=item;
    }
}
let myItem:StockItem={itemName:"Bananas",quantity:5};
let myWarehouse = new WarehouseLocation("Battle Ground, WA 98604");
myWarehouse.StockItem=myItem;
console.log(`name=${myWarehouse.StockItem.itemName}, quantity=${myWarehouse.StockItem.quantity}`);