import './style.css'
import { troops } from './array.js'

const DOMSelectors = {
  parent: document.getElementById("parent")
}

 troops.forEach(troop  => {
 
	 DOMSelectors.parent.insertAdjacentHTML('afterbegin',  `
  <div id="child">
  <h2 id="text">Name: ${troop.name}</h2>
  <img src="${troop.img}" alt="" class="img">
  <h3 id="text">Type: ${troop.type}</h3>
  <h4 id="text">Target: ${troop.target}</h4>
  <h5 id="text">Attack: ${troop.attack}</h5>
  <h6 id="text">Elixir: ${troop.elixir}</h6>
  <h7 id="text">Super: ${troop.super}</h7>
  </div>
  `);
}) 


    