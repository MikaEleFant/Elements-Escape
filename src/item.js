class Item {
  constructor(nameStr, actions) {
    this.name = nameStr.split(" ").join("");
    this.printedName = nameStr;
    this.actions = actions;
  }

  itemUse() {
    return this.actions.use ?? false;
  }

  itemUseOn(itemName) {
    return this.actions.useOn?.[itemName];
  }

  itemInspect() {
    return this.actions.inspect ?? false;
  }

  itemPickup() {
    return this.actions.pickup ?? false;
  }

  itemCombine(itemName) {
    return this.actions.combine?.[itemName];
  }
}

export default Item;