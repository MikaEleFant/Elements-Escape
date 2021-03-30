let level1 = {
  fullvial: {
    name: "full vial",
    actions: {
      useOn: {
        scanner: "You hear a beep from the scanner, followed by a loud thunk from the door. The door slowly swings open to reveal a pitch black room. You walk in as the door shuts behind you."
      },
      inspect: "It's a vial filled with hydrogen gas."
    }
  },
  scanner: {
    name: "scanner",
    actions: {
      inspect: "It's an electronic scanner. It has a small circular slot where it seems a vial would fit."
    }
  },
  room: {
    name: "room",
    actions: {
      inspect: "You look around the room. There is a solid metal door in front of you with an electronic scanner next to it."
    }
  }
}

export default level1;