import { ProxyState } from "../AppState.js";
import Fruit from "../Models/Fruit.js";
import Topping from "../Models/Topping.js";

export function saveState() {
  localStorage.setItem('CurrentCart', JSON.stringify({
    fruits: ProxyState.fruits,
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('CurrentCart'))
  console.log(data)
  if (data != null) {
    ProxyState.fruits = data.fruits.map(p => new Fruit(p))
  }

}