export default ITEMS = {
  "full vial": {
    name: "full vial",
    actions: {
      use: {
        "scanner": {
          text: "You hear a beep from the scanner, followed by a loud thunk from the door. The door slowly swings open to reveal a pitch black room. You walk in as the door shuts behind you."
        }
      },
      inspect: "It's a vial filled with hydrogen gas."
    }
  },
  "scanner": {
    name: "scanner",
    actions: {
      inspect: "It's an electronic scanner. It has a small circular slot where it seems a vial would fit."
    }
  }
}