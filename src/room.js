import Item from "item.js";

class Room {
  constructor(items) {
    this.items = items.forEach(item => new Item(item.name, item.actions));
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

export default Room;