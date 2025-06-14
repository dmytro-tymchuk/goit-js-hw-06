class Storage{
    #item;
    constructor(arr) {
        this.#item = arr;
    }
    getItems() {
        return this.#item
    }
    addItem(newItem) {
        this.#item.push(newItem);
    }
    removeItem(itemToRemove) {
        this.#item = this.#item.filter(item => item !== itemToRemove)
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]