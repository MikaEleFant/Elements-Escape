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

let entry = document.querySelector("input.entry");
let entryButton = document.querySelector("button.entry-button");
let startButton = document.querySelector("button.start-button");
let instructionsButton = document.querySelector("button.instructions-button");
let creditsButton = document.querySelector("button.credits-button");
let menuButtons = document.querySelectorAll("button.main-menu-button");

startButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "none";
  gameScreen.style.display = "grid";
  game.start();
})

instructionsButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "none";
  instructions.style.display = "block";
})

creditsButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "none";
  credits.style.display = "block";
})

menuButtons.forEach(menuButton => menuButton.addEventListener("click", function(event) {
  event.preventDefault();
  mainMenu.style.display = "block";
  [credits, instructions].forEach(nonMenuScreen => nonMenuScreen.style.display = "none");
}))

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
  game.parseInput(entry.value.toLowerCase());
  entry.value = "";
})
