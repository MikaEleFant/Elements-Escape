let level1 = {
  fullvial: {
    name: "full vial",
    actions: {
      pickup: " ",
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
  door: {
    name: "door",
    actions: {
      inspect: "It's a solid metal door. Engraved on its surface is the number '1', followed by the letter 'H' underneath. Perhaps it's a clue..."
    }
  },
  room: {
    name: "room",
    actions: {
      inspect: "There is a solid metal door in front of you with an electronic scanner next to it. There is a vial full of a substance on the ground."
    }
  }
}

export default level1;