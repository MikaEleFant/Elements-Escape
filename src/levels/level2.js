let level2 = {
  room: {
    name: "room",
    actions: {
      inspect: "That said, there isn't much to look at here. There's four huge dusty <b>neon signs</b> on the floor in front of you. In the corner, there's a small <b>nail</b> next to another <b>empty vial</b>. In the opposite corner, there's a lonely little <b>outlet</b>. And of course, on the wall in front of you is another <b>door</b> with a <b>scanner</b> next to it."
    }
  },
  neonsigns: {
    name: "neon signs",
    actions: {
      inspect: "Each sign spells out a different letter: <b>A</b>, <b>B</b>, <b>C</b>, and <b>D</b>. They're bolted to the floor and won't budge. You notice, however, that all four have plugs. They seem to be in working condition, albeit dusty."
    }
  },
  nail: {
    name: "nail",
    actions: {
      pickup: " ",
      inspect: "It seems to be a 5d nail. Pretty ordinary, made of galvanized steel. The tip is still very sharp.",
      useOn: {
        a: ""
      }
    }
  },
  
}

export default level2;