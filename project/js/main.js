import '../style/style.css';
import { foods } from './array.js';


const DOMSelectors = {
  parent: document.getElementById("parent"),
  theme: document.getElementById("theme"),
  fruit: document.getElementById("fruit"),
  veggie: document.getElementById("veggie"),
  protein: document.getElementById("protein"),
  dairy: document.getElementById("dairy"),
  grain: document.getElementById("grain"),
  home: document.getElementById("home"),
};


function insertCards(foodArray) {
  DOMSelectors.parent.innerHTML = '';


  foodArray.forEach((food) => {
    let namef = food.name;
    let imgf = food.img;
    let classf = food.class;
    const card = `
      <div id="child">
        <h2 id="text">Name: ${namef}</h2>
        <img src="${imgf}" alt="" class="img">
        <h3 id="text">Type: ${classf}</h3>
      </div>
    `;
    DOMSelectors.parent.insertAdjacentHTML('beforeend', card);
  });
}


let buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) =>
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    let type = btn.textContent.toLowerCase();
    let newArr = foods.filter((food) => food.class === type);
    insertCards(newArr);
  })
);
insertCards(foods);


function toggleTheme() {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
}


DOMSelectors.theme.addEventListener("click", function (event) {
  event.preventDefault();
  toggleTheme();
});



DOMSelectors.home.addEventListener("click", function (event) {
  event.preventDefault();
  all();
})
function all() {
  DOMSelectors.parent.innerHTML = '';
  foods.forEach((food) => {
    let namef = food.name;
    let imgf = food.img;
    let classf = food.class;
    const home = `
      <div id="child">
        <h2 id="text">Name: ${namef}</h2>
        <img src="${imgf}" alt="" class="img">
        <h3 id="text">Type: ${classf}</h3>
      </div>
    `;
  DOMSelectors.parent.insertAdjacentHTML('beforeend', home);
});
}

/*
DOMSelectors.fruit.addEventListener("click", function (event) {
  event.preventDefault();
  filterfruit();
})


function filterfruit() {
  const filteredfruit = foods.filter(food => food.class === 'fruit');
  DOMSelectors.parent.innerHTML = '';


  filteredfruit.forEach((food) => {
    let namef = food.name;
    let imgf = food.img;
    let classf = food.class;


    const fruitz = `
      <div id="child">
        <h2 id="text">Name: ${namef}</h2>
        <img src="${imgf}" alt="" class="img">
        <h3 id="text">Type: ${classf}</h3>
      </div>
    `;


    DOMSelectors.parent.insertAdjacentHTML('beforeend', fruitz);
  });
}




DOMSelectors.veggie.addEventListener("click", function (event) {
  event.preventDefault();
  filterveggie();
})


function filterveggie() {
  const filteredveggie = foods.filter(food => food.class === 'veggie');
  DOMSelectors.parent.innerHTML = '';


  filteredveggie.forEach((food) => {
    let namef = food.name;
    let imgf = food.img;
    let classf = food.class;


    const veggiez = `
      <div id="child">
        <h2 id="text">Name: ${namef}</h2>
        <img src="${imgf}" alt="" class="img">
        <h3 id="text">Type: ${classf}</h3>
      </div>
    `;


    DOMSelectors.parent.insertAdjacentHTML('beforeend', veggiez);
  });
}




DOMSelectors.protien.addEventListener("click", function (event) {
  event.preventDefault();
  filterprotien();
})


function filterprotien() {
  const filteredprotien = foods.filter(food => food.class === 'protien');


  DOMSelectors.parent.innerHTML = '';


  filteredprotien.forEach((food) => {
    let namef = food.name;
    let imgf = food.img;
    let classf = food.class;


    const protienz = `
      <div id="child">
        <h2 id="text">Name: ${namef}</h2>
        <img src="${imgf}" alt="" class="img">
        <h3 id="text">Type: ${classf}</h3>
      </div>
    `;


    DOMSelectors.parent.insertAdjacentHTML('beforeend', protienz);
  });
}




DOMSelectors.grain.addEventListener("click", function (event) {
  event.preventDefault();
  filtergrain();
})


function filtergrain() {
  const filteredgrain = foods.filter(food => food.class === 'grain');
  DOMSelectors.parent.innerHTML = '';


  filteredgrain.forEach((food) => {
    let namef = food.name;
    let imgf = food.img;
    let classf = food.class;


    const grainz = `
      <div id="child">
        <h2 id="text">Name: ${namef}</h2>
        <img src="${imgf}" alt="" class="img">
        <h3 id="text">Type: ${classf}</h3>
      </div>
    `;


    DOMSelectors.parent.insertAdjacentHTML('beforeend', grainz);
  });
}




DOMSelectors.dairy.addEventListener("click", function (event) {
  event.preventDefault();
  filterdairy();
})


function filterdairy() {
  const filtereddairy = foods.filter(food => food.class === 'dairy');
  DOMSelectors.parent.innerHTML = '';


  filtereddairy.forEach((food) => {
    let namef = food.name;
    let imgf = food.img;
    let classf = food.class;


    const dairyz = `
      <div id="child">
        <h2 id="text">Name: ${namef}</h2>
        <img src="${imgf}" alt="" class="img">
        <h3 id="text">Type: ${classf}</h3>
      </div>
    `;


    DOMSelectors.parent.insertAdjacentHTML('beforeend', dairyz);
  });
} */
