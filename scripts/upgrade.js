import { validateBuy, reload } from "./index.js";

const $upgradePainel = document.querySelector('.upgrade__painel');
const $upgradeUnlock = document.querySelector('.upgrade__unlock');
const $upgradeUnlockButton = document.querySelector('.upgrade__unlockButton');

const unlockPrice = 1000;
let wasUnlocked = false;

const upgrades = {
  up1: {
    name: 'up1',
    price: 100,
    description: 'Aumente o preço de 100 reais',
    cost: 100
  },
  up2: {
    name: 'up2',
    price: 200,
    description: 'Aumente o preço de 200 reais',
    cost: 200
  },
  up3: {
    name: 'up3',
    price: 300,
    description: 'Aumente o preço de 300 reais',
    cost: 300
  }
}

$upgradeUnlockButton.addEventListener('click', () => {
  if(validateBuy(unlockPrice)){
    $upgradeUnlock.style = 'display: none';
    wasUnlocked = true;
    createUpgrade();
  }
})

function createUpgrade(){
  for (const upgrade in upgrades){
    const upgradeData = upgrades[upgrade]

    const upgradeItem = document.createElement('div');
    upgradeItem.classList.add('upgrade__item');

    const upgradeName = document.createElement('h1');
    upgradeName.classList.add('upgrade__name');
    upgradeName.textContent = upgradeData.name;
    upgradeItem.appendChild(upgradeName);

    upgradeItem.addEventListener('click', () => {
      createModal(upgradeData);
    })

    $upgradePainel.appendChild(upgradeItem);
  }
}

function createModal(upgradeData){
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modal__window = document.createElement('div');
  modal__window.classList.add('modal__window');
  modal.appendChild(modal__window);

  const modal__header = document.createElement('div');
  modal__header.classList.add('modal__header');
  modal__window.appendChild(modal__header);

  const modal__title = document.createElement('h1');
  modal__title.classList.add('modal__title');
  modal__title.textContent = upgradeData.name;
  modal__header.appendChild(modal__title);

  const modal__close = document.createElement('button');
  modal__close.classList.add('modal__close');
  modal__close.textContent = 'X';
  modal__header.appendChild(modal__close);
  modal__close.addEventListener('click', () => {
    closeModal(modal);
  })


  $upgradePainel.appendChild(modal);

}


function closeModal(modal){
  console.log(modal);
  modal.remove();
}

