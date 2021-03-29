import Game from "./src/game.js";
import levelStartText from "./src/levels/levels_start.js";
import level1Items from "./src/levels/level1.js";

let levelItems = [];
levelItems.push(level1Items);
console.log(levelItems[0]);
let game = new Game(levelStartText, levelItems);

function startGame() {
  game.start();
}