import Item from "./item.js";

class Level {
  constructor(itemsList) {
    this.items = {};
    for (let item in itemsList) {
      this.items[item.name] = new Item(item.name, item.actions);
    };
    this.foundItems = [];
  }

  isFound(itemName) {
    return this.foundItems[itemName];
  }

  foundItem(itemName) {
    this.foundItems.push(this.items[itemName]);
  }

  isCleared() {
    return this.items.length == this.foundItems.length;
  }
}

export default Level;