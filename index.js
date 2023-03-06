// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let starrCount = 0;

function increment() {
  let count = +countEl.textContent;
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  let count = +countEl.textContent;
  count -= 1;
  countEl.textContent = count;
}

function save(status) {
  if (status == 1) {
    let count = saveEl.textContent;
    count += +countEl.textContent + " - ";
    saveEl.textContent = count;
  }

  console.log(document.getElementById("count-el").textContent);

  countEl.textContent = 0;
}

function isCorrect() {
  let finalCount = +document.getElementById("count-el").textContent;
  if (finalCount == starrCount) {
    save;
  }
}

function howMany(info) {
  if (info == 1) {
    starrCount++;
  } else {
    starrCount = 0;
  }
}

function isBetween(randx, randy, x, y, w, h) {
  if (randx <= x + w + 50 && randx >= x - 50) {
    console.log("xtrue");
    if (randy <= y + h + 50 && randy >= y - 50) {
      console.log("ytrue");
      return true;
    }
  }
  console.log("false");
  return false;
}

function createRandom() {
  let dy = window.innerHeight - 50;
  let dx = window.innerWidth - 50;
  let x = Math.floor(Math.random() * dx) + 1;
  let y = Math.floor(Math.random() * dy) + 1;
  let middle = document.querySelector(".container");
  let pos = middle.getBoundingClientRect();

  isTrue = isBetween(x, y, pos.x, pos.y, pos.width, pos.height);
  while (isTrue) {
    x = Math.floor(Math.random() * dx) + 1;
    y = Math.floor(Math.random() * dy) + 1;
    isTrue = isBetween(x, y, pos.x, pos.y, pos.width, pos.height);
  }
  howMany(1);
  return {
    x: x,
    y: y,
  };
}
window.onload = function () {
  addStar();
};

function starCount() {
  let star = Math.floor(Math.random() * 100) + 1;

  return star;
}

function addStar() {
  for (let index = 0; index < starCount(); index++) {
    let star = document.createElement("img");
    star.src = "/Passenger-Counter/star2.png";
    star.style.width = "50px";
    star.style.position = "absolute";
    star.style.zIndex = "1";

    let { x, y } = createRandom();

    star.style.left = x + "px";
    star.style.top = y + "px";
    outer.appendChild(star);
    console.log(star.x);
    console.log(star.y);
  }

  console.log(starrCount);
}
