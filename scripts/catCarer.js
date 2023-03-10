import { validateBuy, incrementScore } from "./index.js";

const $catCarerPainel = document.querySelector('.catCarer__painel')


const catCaretakers = {
  maria:{
    name: 'Maria',
    price: 1000,
    invoice: 10,
    timeMs: 1000,
    quantity: 0,
    progressWidth: 0,
  },
  jhon:{
    name: 'Jhon',
    price: 2000,
    invoice: 20,
    timeMs: 2000,
    quantity: 0,
    progressWidth: 0,
  },
  paulo:{
    name: 'Paulo',
    price: 3000,
    invoice: 30,
    timeMs: 3000,
    quantity: 0,
    progressWidth: 0,
  },
  lucas:{
    name: 'Lucas',
    price: 5000,
    invoice: 50,
    timeMs: 4000,
    quantity: 0,
    progressWidth: 0,
  },
}

createCatCareItem()

function createCatCareItem(){
  for(const catCarer in catCaretakers){
    const catCarerData = catCaretakers[catCarer];

    const catCarerItem = document.createElement('div');
    catCarerItem.classList.add('catCarer__item');

    const catCarerProgressBar = document.createElement('div');
    catCarerProgressBar.classList.add('catCarer__progress');
    catCarerProgressBar.setAttribute("id", catCarer);
    catCarerItem.appendChild(catCarerProgressBar);

    const catCarerInfo = document.createElement('div');
    catCarerInfo.classList.add('catCarer__info');
    catCarerItem.appendChild(catCarerInfo);

    const catCarerName = document.createElement('h1');
    catCarerName.classList.add('catCarer__name');
    catCarerName.textContent = catCarerData.name;
    catCarerInfo.appendChild(catCarerName);

    const catCarerPrice = document.createElement('h1');
    catCarerPrice.classList.add('catCarer__price');
    catCarerPrice.textContent = `Price: $${catCarerData.price}`;
    catCarerInfo.appendChild(catCarerPrice);

    const catCarerQuantity = document.createElement('h1');
    catCarerQuantity.classList.add('catCarer__quantity');
    catCarerQuantity.textContent = catCarerData.quantity;
    catCarerQuantity.setAttribute("id", catCarer + '_quantity');
    catCarerItem.appendChild(catCarerQuantity);

    catCarerItem.addEventListener('click', () => {
      buyCarer(catCarerData);
    })

    $catCarerPainel.appendChild(catCarerItem);
  }
}

function buyCarer(catCarerData){
  if(validateBuy(catCarerData.price)){
    setProgressBar(catCarerData, 1)
    catCarerData.quantity += 1;
    updateCarer();
  }
}

function setProgressBar(catCarerData, percent){
  const progressBar = document.getElementById(`${catCarerData.name.toLowerCase()}`)


  if(catCarerData.progressWidth === 100){
    progressBar.style.width = 0;
    catCarerData.progressWidth = 0;
  } else{
    setInterval(() => {
      catCarerData.progressWidth += percent;
      progressBar.style.width = catCarerData.progressWidth + "%"
    }, 1000)
  }
  setInterval(() => {
    checkProgress(catCarerData)
  }, 1000)
}

function checkProgress(data){
  const progressBar = document.getElementById(`${data.name.toLowerCase()}`);

  if(data.progressWidth === 100){
    progressBar.style.width = 0;
    data.progressWidth = 0;
    incrementScore(data.invoice);
  }
}

function updateCarer(){
  for(const catCarer in catCaretakers){
    const catCarerQuantity = document.querySelector(`#${catCarer}_quantity`);
    catCarerQuantity.textContent = `${catCaretakers[catCarer].quantity}`
  }
}
