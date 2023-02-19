const $furBall = document.querySelector('.header__furball');
const $furballPerSecond = document.querySelector('.header__fps');
const $multiplyText = document.querySelector('.main__level');
const $collectButton = document.querySelector('.furButton__button');

let multiply = 1;
let score = 0;
let scorePerSecond = 0;

function reload() {
  $furBall.textContent = 'Furball: ' + score;
  $furballPerSecond.textContent = 'FPS: ' + scorePerSecond;
  $multiplyText.textContent = 'Multiply Level: ' + multiply + 'x';
};

function getMultiply(value){
    multiply += value;
    return multiply;
}

$collectButton.addEventListener('click', () => {
    incrementScore();
})

function incrementScore() {
    score += 1 * multiply;
    reload();
}

function validateBuy(price) {
    if(score >= price) {
    score = score - price;
    reload();
    return true;
  }
}


export { validateBuy, reload, getMultiply };
