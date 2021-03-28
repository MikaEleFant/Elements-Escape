class Item {
  constructor(name, actions) {
    this.name = name;
    this.actions = actions;
  }

  itemUse(itemName) {
    return this.actions.use?.[itemName]?.();
  }

  itemInspect() {
    return this.actions.inspect?.();
  }

  itemPickup() {
    return this.actions.pickup?.();
  }

  itemCombine(itemName) {
    return this.actions.combine?.[itemName]?.();
  }
}

export default Item;