// import Game from "./src/game.js";
const levelURLs = ["./src/levels/level1.json"];
let levels;

function getLevel(levelURL) {
  return fetch(levelURL)
    .then(response => {
      return response.json();
    })
    .then(level => {
      return Promise.resolve(level);
    })
}

Promise.all(
  levelURLs.map(getLevel)
).then((data) => {
  levels = data;
  console.log(levels);
})