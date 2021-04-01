let level1 = {
  fullvial: {
    name: "full vial",
    actions: {
      pickup: " ",
      useOn: {
        scanner: "You hear a beep from the scanner, followed by a loud thunk from the door. The door slowly swings open to reveal a pitch black <b>room</b>. You walk in as the door shuts behind you."
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
      inspect: "There is a solid metal <b>door</b> in front of you with an electronic <b>scanner</b> next to it. To your right, there is a small wooden <b>desk</b>. To your left is a dirty <b>sink</b>. There is an <b>empty vial</b> made of glass on the ground behind you."
    }
  },
  emptyvial: {
    name: "empty vial",
    actions: {
      pickup: " ",
      inspect: "It's a vial made of glass, with a cork on top. It's empty.",
      combine: {
        negativeend: "You uncork the vial and quickly submerge it to gather the hydrogen gas. When the gas starts bubbling out of the vial again, you take it out from the water, making sure to keep it flipped so the gas stays trapped inside, and quickly cork it up again."
      }
    }
  },
  desk: {
    name: "desk",
    actions: {
      inspect: "There are a bunch of scattered documents on the table. One of them catches your eye: 'Notes on Electrolysis'. Next to the papers is a plastic <b>basin</b> and a <b>lamp</b>. The desk also has three <b>drawers</b>."
    }
  },
  drawers: {
    name: "drawers",
    actions: {
      inspect: "Opening the first one, you see a dusty 9V <b>battery</b>. You open the second one to find a pair of <b>scissors</b>. There also seems to be a <b>hidden compartment</b> in the second drawer."
    }
  },
  hiddencompartment: {
    name: "hidden compartment",
    actions: {
      inspect: "You pull away the fake bottom, revealing a pristine picture of Rick Astley singing 'Never Gonna Give You Up'. Yes, you just got rick rolled. Deal with it."
    }
  },
  basin: {
    name: "basin",
    actions: {
      pickup: " ",
      inspect: "It's dusty, but it has no cracks or holes and seems to be able to hold water.",
      useOn: {
        sink: "You fill the basin up to the brim with cold, salty water. The <b>full basin</b> is now very heavy, but manageable."
      }
    }
  },
  fullbasin: {
    name: "full basin",
    actions: {
      pickup: " ",
      inspect: "It's full of cold salt water, and still very heavy.",
      combine: {
        wiredbattery: "As you stick the exposed wires into the water, you see bubbles forming from both ends. Remembering the papers on the desk, you take a quick look. One line catches your eye: 'As electrolysis of water occurs, hydrogen gas will be attracted to the <b>negative end</b>, and oxygen gas will be attracted to the positive end'."
      }
    }
  },
  wiredbattery: {
    name: "wired battery",
    actions: {
      pickup: " ",
      inspect: "The wires are attached to the battery, and the ends of each wire are exposed. It almost looks like a tazer, but without the lethality. You can probably perform electrolysis with this."
    }
  },
  battery: {
    name: "battery",
    actions: {
      pickup: " ",
      inspect: "It's a typical 9V rectangular battery. You touch it to your tongue to see if it still holds a charge. It stings you on contact, and you can also feel the dust from the contacts in your mouth now. Why didn't you wipe it first? Weirdo.",
      combine: {
        wires: "You wrap one end of each wire around each contact of the battery. With the other ends of both wires exposed as well, the <b>wired battery</b> looks like a makeshift tazer."
      }
    }
  },
  lamp: {
    name: "lamp",
    actions: {
      inspect: "There is no bulb inside, and the plug is deformed to the point where it can no longer be plugged in. The wires aren't frayed, however, and still seem useable. If only you had something to cut them with..."
    }
  },
  sink: {
    name: "sink",
    actions: {
      inspect: "It's very dirty. You try turning the tap, and cold water flows from the faucet. As you wash your face, you taste a bit of salt within the water."
    }
  },
  negativeend: {
    name: "negative end",
    actions: {
      inspect: "It is bubbling with hydrogen gas. You should probably store it in an <b>empty vial</b> before the battery dies."
    }
  },
  scissors: {
    name: "scissors",
    actions: {
      pickup: " ",
      inspect: "A pair of dusty scissors. It's seen better days, but it can still most likely cut things.",
      useOn: {
        lamp: "Although the scissors were blunt and squeaky, after much effort, you manage to cut the <b>wires</b> off from the lamp. You trim the edges so that they each have an inch of exposed copper on each end."
      }
    }
  },
  wires: {
    name: "wires",
    actions: {
      inspect: "The two wires have an inch of exposed copper on each end. If you attached them to a <b>battery</b>, you can probably make a useful circuit or something."
    }
  }
}

export default level1;