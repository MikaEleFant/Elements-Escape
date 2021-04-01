import Game from "./src/game.js";
import levelStartText from "./src/levels/levels_start.js";
import level1Items from "./src/levels/level1.js";

let levelItems = [];
levelItems.push(level1Items);
let game = new Game(levelStartText, levelItems, levelItems.length);

let mainMenu = document.querySelector("div.main-menu");
let gameScreen = document.querySelector("div.game");
let credits = document.querySelector("div.credits");
let instructions = document.querySelector("div.instructions");
let winScreen = document.querySelector("div.win");
let logs = document.querySelector("ul.logs");

let entry = document.querySelector("input.entry");
let entryButton = document.querySelector("button.entry-button");
let startButton = document.querySelector("button.start-button");
let instructionsButton = document.querySelector("button.instructions-button");
let creditsButtons = document.querySelectorAll("button.credits-button");
let menuButtons = document.querySelectorAll("button.main-menu-button");

startButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "none";
  gameScreen.style.display = "grid";
  while (logs.firstChild) {
    logs.removeChild(logs.firstChild);
  }
  game.start();
})

instructionsButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "none";
  instructions.style.display = "block";
})

creditsButtons.forEach(creditsButton => creditsButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "none";
  winScreen.style.display = "none";
  credits.style.display = "grid";
}))

menuButtons.forEach(menuButton => menuButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "block";
  [gameScreen, credits, instructions, winScreen].forEach(nonMenuScreen => nonMenuScreen.style.display = "none");
}))

entry.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    entryButton.click();
  }
})

entryButton.addEventListener("click", function(event) {
  event.preventDefault();
  game.parseInput(entry.value.toLowerCase());
  entry.value = "";
})

