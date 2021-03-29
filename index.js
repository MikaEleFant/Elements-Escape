import Game from "./src/game.js";
import levelStartText from "./src/levels/levels_start.js";
import level1Items from "./src/levels/level1.js";

let levelItems = [];
levelItems.push(level1Items);
console.log(levelItems[0]);
let game = new Game(levelStartText, levelItems);

let entry = document.querySelector("input.entry");
let entryButton = document.querySelector("button.entry-button");

entry.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    entryButton.click();
  }
})

entry.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.detail === 3) {
    entryButton.click();
  }
})

entryButton.addEventListener("click", function(event) {
  event.preventDefault();
  game.start();
})
