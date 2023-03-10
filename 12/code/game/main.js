let item = {};
let itemsList = [];
let score = 0;

window.onload = function () {
  const gameItems = document.getElementById("game-items");
  for (let i = 1; i <= 8; i++) {
    const currItem = `<span class="game__item">
      <img src="./assets/${i}.png" class="game__item-img" />
    </span>`;

    gameItems.innerHTML = gameItems.innerHTML + currItem + currItem;
  }
  console.log("loaded");
};

function shuffleString(str = "") {
  let s = "";
  let counter = 0;

  let indexObj = {};

  while (s.length !== str.length) {
    let index = Math.floor(str.length * Math.random());
    if (indexObj[index] === undefined) {
      const ele = str[index];
      indexObj[index] = ele;
      s += ele;
    }

    counter++;
    if (counter > 1000) break;
  }

  return s;
}

function handleStart() {
  const gameItems = document.getElementById("game-items");
  gameItems.innerHTML = "";
  let allImgs = "12345678".repeat(2);
  let shuffled = shuffleString(allImgs);

  for (let i = 0; i < shuffled.length; i++) {
    const ele = shuffled[i];

    gameItems.innerHTML += `
      <button class="game__item" id="item${i}" name="${ele}" onclick="handleItemFlip('item${i}', ${ele})">
        <img src="./assets/${ele}.png" class="game__item-img" />
      </button>
    `;
  }
}

function handleItemFlip(id, value) {
  console.log(id);
  console.log(value);
  // const item = document.getElementById(id);

  // console.log(item.name);
}
