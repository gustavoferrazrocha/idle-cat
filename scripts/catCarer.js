import { validateBuy } from "./index.js";

const $catCarerPainel = document.querySelector('.catCarer__painel')



const catCaretakers = {
  maria:{
    nome: 'Maria',
    price: 10,
    invoice: 1,
    timeMs: 1000,
    quantity: 0,
  },
  joao:{
    nome: 'João',
    price: 20,
    invoice: 2,
    timeMs: 2000,
    quantity: 0,
  },
  paulo:{
    nome: 'Paulo',
    price: 30,
    invoice: 3,
    timeMs: 3000,
    quantity: 0,
  },
  lucas:{
    nome: 'Lucas',
    price: 40,
    invoice: 4,
    timeMs: 4000,
    quantity: 0,
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
    catCarerItem.appendChild(catCarerProgressBar);

    const catCarerInfo = document.createElement('div');
    catCarerInfo.classList.add('catCarer__info');
    catCarerItem.appendChild(catCarerInfo);

    const catCarerName = document.createElement('h1');
    catCarerName.classList.add('catCarer__name');
    catCarerName.textContent = catCarerData.nome;
    catCarerInfo.appendChild(catCarerName);

    const catCarerPrice = document.createElement('h1');
    catCarerPrice.classList.add('catCarer__price');
    catCarerPrice.textContent = `Price: $${catCarerData.price}`;
    catCarerInfo.appendChild(catCarerPrice);

    const catCarerQuantity = document.createElement('h1');
    catCarerQuantity.classList.add('catCarer__quantity');
    catCarerQuantity.textContent = catCarerData.quantity;
    catCarerItem.appendChild(catCarerQuantity);

    catCarerItem.addEventListener('click', () => {
      buyCarer(catCarerData);
    })

    $catCarerPainel.appendChild(catCarerItem);
  }
}

function buyCarer(catCarerData){
  console.log(catCarerData)
}
