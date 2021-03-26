class Room {
  constructor(items) {
    this.items = items;
  }

  checkItem(item) {
    return this.items.includes(item);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    this.items = this.items.filter(function(el) {
      return el != item;
    });
  }

  use(obj1, obj2) {
    let firstSentence = "You use the " + obj1 + " on the " + obj2 + ".";
  }

  inspect(obj) {
    let firstSentence = "You inspect the " + obj + ".";
  }

  pickup(obj) {
    let firstSentence = "You pick up the " + obj + ".";
  }

  combine(obj1, obj2) {
    let firstSentence = "You combine the " + obj1 + " with the " + obj2 + ".";
  }

  static error(func, objs) {
    if (func == "use") {
      return "You use the " + objs[0] + " on the " + objs[1] + ", but nothing happens."
    }
    else if (func == "inspect") {
      return "You inspect the " + objs + ". There is nothing particularly interesting about it."
    }
    else if (func == "pickup") {
      return "You try to pick up the " + objs + ", but you can't."
    }
    else if (func == "combine") {
      return "You try combining the " + objs[0] + " with the " + objs[1] + ". It doesn't work."
    }
    else {
      return "There is no " + objs + " to interact with."
    }
  }
}

export default Room;