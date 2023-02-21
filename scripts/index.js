const $furBall = document.querySelector('.header__furball');
const $furballPerSecond = document.querySelector('.header__fps');
const $multiplyText = document.querySelector('.main__level');
const $collectButton = document.querySelector('.furButton__button');

let multiply = 1;
let score = 0.0;
let scorePerSecond = 0;

function reload() {
  $furBall.textContent = 'Furball: ' + score.toFixed(1);
  $furballPerSecond.textContent = 'FPS: ' + scorePerSecond;
  $multiplyText.textContent = 'Multiply Level: ' + multiply.toFixed(2) + 'x';
};

function updateMultiply(value){
    multiply += value;
    reload();
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

reload();

export { validateBuy, reload, updateMultiply };
