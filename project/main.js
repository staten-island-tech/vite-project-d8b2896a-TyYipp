import './style.css'
import { troops } from './counter.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

/* troops.forEach(troop  => {
  let card = document.querySelector('#app')
  
	card.innerHTML = card.innerHTML + `
  <div>troop is ${troop.name}</div>
  `
}) */
const DOMSelectors = {
  app: document.getElementById("app"),
};

troops.forEach(troop  => {
  
  DOMSelectors.app.insertAdjacentHTML("afterbegin",
    `<div class="child"> 
      <h2 class="text" id="card">hi im${troop.name}</h2>
    </div>`
);
});
    