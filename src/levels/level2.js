let level2 = {
  room: {
    name: "room",
    actions: {
      inspect: "That said, there isn't much to look at here. There's four huge dusty <b>neon signs</b> on the floor in front of you. In the corner, there's a small <b>nail</b> next to another <b>empty vial</b>. In the opposite corner, there's a lonely little <b>table</b>. And of course, on the wall in front of you is another <b>door</b> with a <b>scanner</b> next to it."
    }
  },
  door: {
    name: "door",
    actions: {
      inspect: "Again, made of solid metal. This time, it has '2' and 'He' engraved upon it. Another clue, perhaps?"
    }
  },
  table: {
    name: "table",
    actions: {
      inspect: "On the surface are more research papers. These say 'Noble Gas Electroluminescence'. Interesting..."
    }
  },
  emptyvial: {
    name: "empty vial",
    actions: {
      pickup: " ",
      inspect: "It's made of glass, with another cork on top. Useful for storing things.",
      useOn: {
        puncturedsign: "Uncorking the vial, you put it on top of the hole in the punctured sign. Interestingly, you can feel the vial becoming 'lighter' as you hold it. Interesting! It seems you now have a <b>full vial</b> of helium!"
      }
    }
  },
  neonsigns: {
    name: "neon signs",
    actions: {
      inspect: "Each sign is different: <b>sign A</b>, <b>sign B</b>, <b>sign C</b>, and <b>sign D</b>. They're bolted to the floor and won't budge. You notice, however, that all four have plugs. They seem to be in working condition, albeit dusty."
    }
  },
  signa: {
    name: "sign A",
    actions: {
      inspect: "It's literally a large 'A' for a gas-electric sign. Upon plugging it in, the 'A' lights up with a bright green color."
    }
  },
  signb: {
    name: "sign B",
    actions: {
      inspect: "This one has a large 'B' for its sign. It glows with a dim orange color when plugged in."
    }
  },
  signc: {
    name: "sign C",
    actions: {
      inspect: "This has a large 'C' for its letter. It glows a bright pink as soon as you plug it in.",
    }
  },
  signd: {
    name: "sign D",
    actions: {
      inspect: "A large 'D' is spelled out. Get your mind out of the gutter. I'm not even telling you the color because of that. Pervert."
    }
  },
  nail: {
    name: "nail",
    actions: {
      pickup: " ",
      inspect: "It seems to be a 5d nail. Pretty ordinary, made of galvanized steel. The tip is still very sharp.",
      useOn: {
        signc: "Controlling your strength, you manage to create a small hole in the sign. You can hear the <b>punctured sign</b> hissing as it slowly releases the gas inside! Quick, gather it before it all leaks out!"
      }
    }
  },
  puncturedsign: {
    name: "punctured sign",
    actions: {
      inspect: "It's leaking gas! Hurry and gather it!"
    }
  },
  scanner: {
    name: "scanner",
    actions: {
      inspect: "It seems to be the same as the last scanner: electronic with a groove in the shape of a circle in it. Another vial, eh?"
    }
  },
  fullvial: {
    name: "full vial",
    actions: {
      pickup: " ",
      inspect: "It's filled with helium. Interestingly enough, the vial does feel lighter than before!",
      useOn: {
        scanner: "The scanner beeps, and the door unlocks. You brace yourself and take a deep breath before walking through it into the darkness that lies beyond as the door shuts behind you."
      }
    }
  }
}

export default level2;