class Player {
  constructor() {
    this.inventory = [];
  }

  isInventoryFull() {
    return this.inventory.length == 6;
  }

  checkInventory(obj) {
    return this.inventory.includes(obj);
  }

  addInventory(obj) {
    this.inventory.push(obj);
  }

  removeInventory(obj) {
    this.inventory = this.inventory.filter(item => item != obj);
  }

  use(obj) {
    if (!this.checkInventory(obj)) {
      return this.error(obj.printedName)
    }

    const used = obj.itemUse();
    const firstSentence = "You use the " + obj.printedName + ". ";

    if (used) {
      this.removeInventory(obj);
      return firstSentence + used;
    }
    else {
      return firstSentence + this.error("use");
    }
  }
  
  useOn(obj1, obj2) {
    if (!this.checkInventory(obj1)) {
      return this.error(obj1.printedName);
    }

    const used = obj1.itemUseOn(obj2.name);
    const firstSentence = "You use the " + obj1.printedName + " on the " + obj2.printedName + ". ";
    
    if (used) {
      this.removeInventory(obj1);
      return firstSentence + used;
    }
    else {
      return firstSentence + this.error("use");
    }
  }

  inspect(obj) {
    const inspected = obj.itemInspect();
    const firstSentence = "You inspect the " + obj.printedName + ". ";

    if (inspected) {
      return firstSentence + inspected;
    }
    else {
      return firstSentence + this.error("inspect");
    }
  }

  pickup(obj) {
    const pickedup = obj.itemPickup();
    const firstSentence = "You pick up the " + obj.printedName + ". ";

    if (this.isInventoryFull()) {
      return "You try to pick up the " + obj.printedName + ", but you realize your inventory is full.";
    }
    else if (this.inventory.includes(obj)) {
      return "You're already holding the " + obj.printedName + ".";
    }

    if (pickedup) {
      this.addInventory(obj);
      return firstSentence + pickedup;
    }
    else {
      return firstSentence + this.error("pickup");
    }
  }

  combine(obj1, obj2) {
    if (!this.checkInventory(obj1)) {
      return this.error(obj1.printedName)
    }
    if (!this.checkInventory(obj2)) {
      return this.error(obj2.printedName)
    }

    const combined = obj1.itemCombine(obj2.name) ?? obj2.itemCombine(obj1.name);
    const firstSentence = "You combine the " + obj1.printedName + " with the " + obj2.printedName + ". ";

    if (combined) {
      this.removeInventory(obj1);
      this.removeInventory(obj2);
      return firstSentence + combined;
    }
    else {
      return firstSentence + this.error("combine");
    }
  }

  error(func) {
    if (func == "use") {
      return "Nothing happens."
    }
    else if (func == "inspect") {
      return "There is nothing particularly interesting about it."
    }
    else if (func == "pickup") {
      return "Or at least, try to. It won't budge."
    }
    else if (func == "combine") {
      return "You feel an embarassing sense of stupidity and quickly separate them."
    }
    else {
      return "You do not have a " + func + ".";
    }
  }
}

export default Player;