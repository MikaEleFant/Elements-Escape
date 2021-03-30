import Item from "./item.js";

class Level {
  constructor(itemsList) {
    this.items = itemsList;
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