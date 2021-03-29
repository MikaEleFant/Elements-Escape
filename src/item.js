class Item {
  constructor(name, actions) {
    this.name = name;
    this.actions = actions;
  }

  itemUse() {
    return this.actions.use?.();
  }

  itemUseOn(itemName) {
    return this.actions.useOn?.[itemName]?.();
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