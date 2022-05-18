const furBall = document.querySelector('.header__furball');
const click = document.querySelector('.furButton__button');
const furballPerSecond = document.querySelector('.header__fps');
const multiplyText = document.querySelector('.main__level');
let multiply = 1;
const blackCatCost = 666;
const siameseCost = 3000;
const siberianCost = 10000;
const mineCoonCost = 100000;
let scorePerSecond = 0;
let score = 0;
let scoreFixed = 0;

const reload = () => {
  furBall.innerHTML = 'Furball: ' + scoreFixed;
  furballPerSecond.innerHTML = 'FPS: ' + scorePerSecond;
  multiplyText.innerHTML = 'Multiplier: ' + multiply + 'x';
};

click.addEventListener('click', () => {
  score = score + 1 * multiply;
  scoreFixed = score.toFixed(1);
  reload();
});

function blackCat() {
    if (validateBuy(blackCatCost)) {
        multiply++
        reload();
    }
}

function siameseCat() {
    if (validateBuy(siameseCost)) {
        multiply = multiply + 3
        reload();
    }
}

function siberianCat() {
    if (validateBuy(siberianCost)) {
        multiply = multiply + 10
        reload();
    }
}

function mineCoon() {
    if (validateBuy(mineCoonCost)) {
        multiply = multiply + 100
        reload();
    }
}

function validateBuy(price) {
    if(score >= price) {
    score = score - price;
    scoreFixed = score.toFixed(1);
    reload();
    return true;
  }
}

reload();
