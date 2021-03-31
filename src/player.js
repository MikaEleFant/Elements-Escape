class Player {
  constructor() {
    this.inventory = [];
  }

  checkInventory(obj) {
    this.inventory.includes(obj);
  }

  addInventory(obj) {
    this.inventory.push(obj);
  }

  removeInventory(obj) {
    this.inventory = this.inventory.filter(item => item != obj);
  }

  use(obj) {
    if (!this.checkInventory(obj)) {
      return this.error(obj.name)
    }

    let used = obj.itemUse();
    let firstSentence = "You use the " + obj.printedName + ". ";

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
      return this.error(obj1.name)
    }

    let used = obj1.itemUseOn(obj2.name);
    let firstSentence = "You use the " + obj1.printedName + " on the " + obj2.printedName + ". ";
    
    if (used) {
      this.removeInventory(obj1);
      return firstSentence + used;
    }
    else {
      return firstSentence + this.error("use");
    }
  }

  inspect(obj) {
    let inspected = obj.itemInspect();
    let firstSentence = "You inspect the " + obj.printedName + ". ";

    if (inspected) {
      return firstSentence + inspected;
    }
    else {
      return firstSentence + this.error("inspect");
    }
  }

  pickup(obj) {
    let pickedup = obj.itemPickup();
    let firstSentence = "You pick up the " + obj.printedName + ". ";

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
      return this.error(obj1.name)
    }
    if (!this.checkInventory(obj2)) {
      return this.error(obj2.name)
    }

    let combined = obj.itemCombine(obj2.name);
    let firstSentence = "You combine the " + obj1.printedName + " with the " + obj2.printedName + ". ";

    if (combined) {
      this.removeInventory(obj1);
      this.removeInventory(obj2);
      return firstSentence + combined;
    }
    else {
      return firstSentence + this.error("combine");
    }
  }

  error(func=null, obj=null) {
    if (!func) {
      return "You do not have a " + obj;
    }
    else if (func == "use") {
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
  }
}

export default Player;