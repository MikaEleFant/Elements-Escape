import Player from "./player.js";
import Item from "./item.js";

class Game {
  constructor(levelStartArray, levelItems, totalLevels) {
    this.allLevelsItems = levelItems;
    this.allLevelsStart = levelStartArray;
    this.currentLevel = 0
    this.currentLevelStartText = this.allLevelsStart[this.currentLevel];
    this.currentLevelItems = levelItems[this.currentLevel];
    this.totalLevels = totalLevels;

    let itemObjs = {};
    for (let item in this.currentLevelItems) {
      itemObjs[item] = new Item(this.currentLevelItems[item].name, this.currentLevelItems[item].actions);
    }
    this.currentLevelItems = itemObjs;
    this.player = new Player();
  }

  start() {
    this.printText(this.currentLevelStartText);
  }

  parseInput(input) {
    let [actionWord, ...inputWords] = input.split(" ");
    let resultText;
    if (inputWords.includes("on")) {
      let onIdx = inputWords.indexOf("on");
      let item1Name = inputWords.slice(0, onIdx).join("");
      let item1 = this.currentLevelItems[item1Name];
      let item2Name = inputWords.slice(onIdx + 1).join("");
      let item2 = this.currentLevelItems[item2Name];

      resultText = this.player.useOn(item1, item2);
      this.isLevelCleared(item2Name, !(resultText.includes("Nothing happened.")));
    }
    else if (inputWords.includes("with")) {
      let withIdx = inputWords.indexOf("with");
      let item1Name = inputWords.slice(0, withIdx - 1).join("");
      let item1 = this.currentLevelItems[item1Name];
      let item2Name = inputWords.slice(withIdx + 1).join("");
      let item2 = this.currentLevelItems[item2Name];

      resultText = this.player.combine(item1, item2);
    }
    else {
      let itemName = inputWords.join("");
      let item = this.currentLevelItems[itemName];
      if (actionWord == "use") {
        resultText = this.player.use(item);
      }
      else if (actionWord == "inspect") {
        resultText = this.player.inspect(item);
      }
      else if (actionWord == "pick") {
        if (inputWords[0] == "up") {
          itemName = inputWords.slice(1).join("");
          item = this.currentLevelItems[itemName];

          resultText = this.player.pickup(item);
        }
      }
      else {
        resultText = "Invalid action detected. Use one of the four actions: USE, INSPECT, PICK UP, or COMBINE."
      }
    }

    this.printText(resultText);
  }

  printText(text) {
    let logs = document.querySelector("ul.logs");
    let liElement = document.createElement("li");
    let textNode = document.createTextNode(text);
  
    liElement.appendChild(textNode);
    logs.appendChild(liElement);
    setTimeout(function(){logs.lastElementChild.style.opacity = "1";}, 100);

    this.autoRemoveText(logs);
  }

  autoRemoveText(logs) {
    let liS = document.querySelectorAll("li");
    let liTotalHeight = 0;
    for (let i = 0; i < liS.length; i++) {
      liTotalHeight += liS[i].offsetHeight;
    }
    
    if (liTotalHeight >= logs.offsetHeight - 40) {
      logs.removeChild(logs.firstElementChild);
    }
  }

  isGameCleared() {
    this.currentLevel == this.totalLevels;
  }

  isLevelCleared(itemName, opened) {
    if (opened && itemName == "scanner") {
      if (this.isGameCleared()) {
        
      }
      else {
        this.nextLevel();
      }
    }
  }

  nextLevel() {
    this.currentLevel += 1;
    this.currentLevelStartText = this.allLevelsStart[this.currentLevel];
    this.currentLevelItems = levelItems[this.currentLevel];
    this.start();
  }
}

export default Game;