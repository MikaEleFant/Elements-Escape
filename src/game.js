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
    this.player.inventory = [];
    this.printText(this.currentLevelStartText);
  }

  parseInput(input) {
    let [actionWord, ...inputWords] = input.split(" ");
    let resultText;

    if (!["use", "inspect", "pick", "combine"].includes(actionWord)) {
      resultText = "Invalid action detected. Use one of the four actions: USE, INSPECT, PICK UP, or COMBINE."
    }
    else if (inputWords.includes("on")) {
      let onIdx = inputWords.indexOf("on");
      let item1Name = inputWords.slice(0, onIdx).join("");
      let item2Name = inputWords.slice(onIdx + 1).join("");
      let item1 = this.currentLevelItems[item1Name];
      let item2 = this.currentLevelItems[item2Name];

      if (!!item1 && !!item2) {
        resultText = this.player.useOn(item1, item2);
        this.isLevelCleared(item2Name, !(resultText.includes("Nothing happened.")));
      }
      else if (!!item1) {
        resultText = this.noItemText(item2Name);
      }
      else {
        resultText = this.noItemText(item1Name);
      }
    }
    else if (inputWords.includes("with")) {
      let withIdx = inputWords.indexOf("with");
      let item1Name = inputWords.slice(0, withIdx - 1).join("");
      let item1 = this.currentLevelItems[item1Name];
      let item2Name = inputWords.slice(withIdx + 1).join("");
      let item2 = this.currentLevelItems[item2Name];

      if (!!item1 && !!item2) {
        resultText = this.player.combine(item1, item2);
      }
      else if (!!item1) {
        resultText = this.noItemText(item2Name);
      }
      else {
        resultText = this.noItemText(item1Name);
      }
    }
    else {
      let itemName = inputWords.join("");
      if (inputWords[0] == "up") {
        itemName = inputWords.slice(1).join("");
      }

      let item = this.currentLevelItems[itemName];
      if (!item) {
        resultText = this.noItemText(itemName);
      }
      else if (actionWord == "use") {
        resultText = this.player.use(item);
      }
      else if (actionWord == "inspect") {
        resultText = this.player.inspect(item);
      }
      else if (actionWord == "pick") {
        console.log(itemName, inputWords);
        item = this.currentLevelItems[itemName];

        resultText = this.player.pickup(item);
      }
    }

    this.printText(resultText);
    this.updateInventory();
  }

  noItemText(itemName) {
    return "There is no " + itemName + " to interact with.";
  }

  printText(text) {
    let logs = document.querySelector("ul.logs");
    let liElement = document.createElement("li");
    liElement.innerHTML = text;
  
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

  updateInventory() {
    let inventoryItems = document.querySelectorAll("div.item");

    for (let i = 0; i < inventoryItems.length; i++) {
      let item = this.player.inventory[i] ?? {printedName: "EMPTY"};
      inventoryItems[i].innerHTML = item.printedName.toUpperCase();

      if (item.printedName == "EMPTY") {
        inventoryItems[i].style.color = "gray";
      }
      else {
        inventoryItems[i].style.color = "white";
      }
    }
  }

  isGameCleared() {
    return this.currentLevel == this.totalLevels - 1;
  }

  isLevelCleared(itemName, opened) {
    if (opened && itemName == "scanner") {
      if (this.isGameCleared()) {
        setTimeout(function(){document.querySelector("div.game").style.display = "none"}, 3000);
        setTimeout(function(){document.querySelector("div.win").style.display = "block"}, 3000);
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