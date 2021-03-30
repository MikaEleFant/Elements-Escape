class Player {
  constructor() {
    this.inventory = [];
  }

  use(obj) {
    let used = obj.itemUse();
    let firstSentence = "You use the " + obj.printedName + ". ";

    if (used) {
      return firstSentence + used;
    }
    else {
      return firstSentence + this.error("use");
    }
  }
  
  useOn(obj1, obj2) {
    let used = obj1.itemUseOn(obj2.name);
    let firstSentence = "You use the " + obj1.printedName + " on the " + obj2.printedName + ". ";
    
    if (used) {
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
      return firstSentence + pickedup;
    }
    else {
      return firstSentence + this.error("pickup");
    }
  }

  combine(obj1, obj2) {
    let combined = obj.itemCombine(obj2.name);
    let firstSentence = "You combine the " + obj1.printedName + " with the " + obj2.printedName + ". ";

    if (combined) {
      return firstSentence + combined;
    }
    else {
      return firstSentence + this.error("combine");
    }
  }

  error(func, obj) {
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
      return "You quickly realize there is no " + obj + " to interact with."
    }
  }
}

export default Player;