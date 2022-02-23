// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  //you can also use getElementById
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  //you can also use getElementById
  if (state.Tomatoes) {
    tomatoes.style.display = "inherit";
  } else {
    tomatoes.style.display = "none";
  }
}

function renderOnions() {
  let onion = document.querySelector("#onion");
  //you can also use getElementById
  if (state.Onions) {
    onion.style.display = "inherit";
  } else {
    onion.style.display = "none";
  }
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  //you can also use getElementById
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

function renderButtons(){
  let patty = document.querySelector(".btn-patty");
  let tomato = document.querySelector(".btn-tomatoes");
  let onion = document.querySelector(".btn-onions");
  let lettuce =document.querySelector(".btn-lettuce");
  let cheese = document.querySelector(".btn-cheese");
  
  if(!state.Patty)
  {
   var cl = "button" + " btn-patty";
   patty.className = cl;
  }
  else{
    var cl = patty.classList;
   patty.className = cl + " active";
  }

  if(!state.Tomatoes)
  {
   var cl = "button" + " btn-tomatoes";
   tomato.className = cl;
  }
  else{
    var cl = tomato.classList;
   tomato.className = cl + " active";
  }

  if(!state.Lettuce)
  {
   var cl = "button" + " btn-lettuce";
   lettuce.className = cl;
  }
  else{
    var cl = lettuce.classList;
   lettuce.className = cl + " active";
  }

  if(!state.Onions)
  {
   var cl = "button" + " btn-onions";
   onion.className = cl;
  }
  else{
    var cl = onion.classList;
   onion.className = cl + " active";
  }

  if(!state.Cheese)
  {
   var cl = "button" + " btn-cheese";
   cheese.className = cl;
  }
  else{
    var cl = cheese.classList;
   cheese.className = cl + " active";
  }
}

//This function is to show the incredients on the board used in the burger
function  renderIngredientsBoard(){
if(state.Patty)
{
  let ingr = document.getElementsByClassName('items')[0];
  ingr.innerHTML = "Patty";
}
else{
  let ingr = document.getElementsByClassName('items')[0];
  ingr.innerHTML = "";
}

if(state.Tomatoes)
{
  let ingr = document.getElementsByClassName('items')[2];
  ingr.innerHTML = "Tomatoes";
}
else{
  let ingr = document.getElementsByClassName('items')[2];
  ingr.innerHTML = "";
}

if(state.Onions)
{
  let ingr = document.getElementsByClassName('items')[3];
  ingr.innerHTML = "Onions";
}
else{
  let ingr = document.getElementsByClassName('items')[3];
  ingr.innerHTML = "";
}

if(state.Lettuce)
{
  let ingr = document.getElementsByClassName('items')[4];
  ingr.innerHTML = "Lettuce";
}
else{
  let ingr = document.getElementsByClassName('items')[4];
  ingr.innerHTML = "";
}

if(state.Cheese)
{
  let ingr = document.getElementsByClassName('items')[1];
  ingr.innerHTML = "Cheese";
}
else{
  let ingr = document.getElementsByClassName('items')[1];
  ingr.innerHTML = "";
}

}

function renderPrice()
{
  let price = document.querySelector('.price-details');
  let inr = "INR ";
  if(state.Patty)
  {
    ingredients.Patty = 80;
  }
  else{
    ingredients.Patty = 0;
  }
  if(state.Tomatoes)
  {
    ingredients.Tomatoes = 10;
  }
  else{ingredients.Tomatoes = 0};
  if(state.Cheese){ingredients.Cheese = 20}
  else{ingredients.Cheese =0}
  if(state.Lettuce){ingredients.Lettuce = 20}
  else{ingredients.Lettuce =0};
  if(state.Onions){ingredients.Onions = 20}
  else{ingredients.Onions = 0}
  let totalPrice = ingredients.Patty + ingredients.Lettuce + ingredients.Cheese + ingredients.Onions + ingredients.Tomatoes + wholeWheatBun*2;
  price.innerHTML =inr + totalPrice;
}




document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
};

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
};

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
};

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
};

