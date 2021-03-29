import Player from "./player.js";
import Level from "./level.js";

class Game {
  constructor(levelStartArray, levelItems) {
    this.allLevelsItems = levelItems;
    this.allLevelsStart = levelStartArray;
    this.currentLevel = 0
    this.currentLevelStartText = this.allLevelsStart[this.currentLevel];
    this.currentLevelItems = levelItems[this.currentLevel];
    this.cleared = false;

    this.level = new Level(this.currentLevelItems);
    this.player = new Player();
  }

  start() {
    this.printText(this.currentLevelStartText);
  }

  printText(text) {
    let liElement = document.createElement("li");
    let textNode = document.createTextNode(text);
    liElement.appendChild(textNode);
    document.querySelector("ul.logs").appendChild(liElement);
  }

  update() {

  }
}

export default Game;