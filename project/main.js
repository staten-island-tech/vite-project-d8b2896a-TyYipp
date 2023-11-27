import './style.css'
import { troops } from './array.js'

const DOMSelectors = {
  parent: document.getElementById("parent"),
  dark: document.getElementById("dark"),
  normal: document.getElementById("normal"),
  melee: document.getElementById("melee"),
  ranged: document.getElementById("ranged"),
  defenses: document.getElementById("defenses"),
  any: document.getElementById("any"),
  super: document.getElementById("super"),
  ground: document.getElementById("ground"),
  air: document.getElementById("air"),
}
function fill (){
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
} 
fill()


    