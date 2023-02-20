import { validateBuy, reload, getMultiply } from "./index.js";

const shopPainel = document.querySelector('.shop__painel');

const cats = {
  blackCat: {
    name: "Black Cat",
    price: 2,
    multiplier: 1,
    quantity: 0
  },
  siameseCat: {
    name: "Siamese Cat",
    price: 3,
    multiplier: 3,
    quantity: 0
    
  },
  siberianCat: {
    name: "Siberian Cat",
    price: 4,
    multiplier: 10,
    quantity: 0
    
  },
  mineCoonCat: {
    name: "Mine Coon Cat",
    price: 5,
    multiplier: 100,
    quantity: 0
  }
};
createShopItem();

function createShopItem() {
  for (const cat in cats){
      const catData = cats[cat]
      
      const catItem = document.createElement('div')
      catItem.classList.add('shop__item')

      const catInfo = document.createElement('div')
      catInfo.classList.add('shop__info')
      catItem.appendChild(catInfo)
  
      const catName = document.createElement('h1');
      catName.classList.add('shop__name');
      catName.textContent = catData.name;
      catInfo.appendChild(catName);
  
      const catPrice = document.createElement('h2');
      catPrice.classList.add('shop__price');
      catPrice.textContent = `Price: $${catData.price}`;
      catInfo.appendChild(catPrice);
  
      const catQuantity = document.createElement('h2')
      catQuantity.classList.add('shop__quantity');
      catQuantity.textContent = `${catData.quantity}`;
      catQuantity.setAttribute("id", cat);
      catItem.appendChild(catQuantity);
    
      catItem.addEventListener('click', () => {
        buyCat(catData);
      });
    
      shopPainel.appendChild(catItem);
  }
}

function updateShop(){
  for(const cat in cats){
    const catQuantity = document.querySelector(`#${cat}`);
    catQuantity.textContent = `${cats[cat].quantity}`
  }
}


function buyCat(catData){
  if(validateBuy(catData.price)){
    getMultiply(catData.multiplier);
    catData.quantity += 1;
    reload();
    updateShop()
  }
}


export { cats }