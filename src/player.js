class Player {
  constructor() {
    this.inventory = [];
  }

  use(obj) {
    let used = obj.itemUse();
    let firstSentence = "You use the " + obj.name + ".";

    if (used) {
      return firstSentence + used.text;
    }
    else {
      return firstSentence + this.error("use");
    }
  }
  
  useOn(obj1, obj2) {
    let used = obj1.itemUseOn(obj2.name);
    let firstSentence = "You use the " + obj1.name + " on the " + obj2.name + ".";
    
    if (used) {
      return firstSentence + used.text;
    }
    else {
      return firstSentence + this.error("use");
    }
  }

  inspect(obj) {
    let inspected = obj.itemInspect();
    let firstSentence = "You inspect the " + obj.name + ".";

    if (inspected) {
      return firstSentence + inspected.text;
    }
    else {
      return firstSentence + this.error("inspect");
    }
  }

  pickup(obj) {
    let pickedup = obj.itemPickup();
    let firstSentence = "You pick up the " + obj.name + ".";

    if (pickedup) {
      return firstSentence + pickedup.text;
    }
    else {
      return firstSentence + this.error("pickup");
    }
  }

  combine(obj1, obj2) {
    let combined = obj.itemCombine(obj2.name);
    let firstSentence = "You combine the " + obj1.name + " with the " + obj2.name + ".";

    if (combined) {
      return firstSentence + combined.text;
    }
    else {
      return firstSentence + this.error("combine");
    }
  }

  error(func, obj=null) {
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