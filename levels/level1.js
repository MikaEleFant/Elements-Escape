import Room from "room.js";

class Room1 extends Room {
  constructor(items) {
    super(items);
  }

  use(obj1, obj2) {
    super(use(obj1, obj2));
  }

  inspect(obj) {
    super(inspect(obj));
  }

  pickup(obj) {
    super(pickup(obj));
  }

  combine(obj1, obj2) {
    super(combine(obj1, obj2));
  }
}

export default Room1;