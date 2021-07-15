import { ProxyState } from "../AppState.js";
import Fruit from "../Models/Fruit.js";
import Topping from "../Models/Topping.js";

export function saveState() {
  localStorage.setItem('MarksFruit', JSON.stringify({
    fruits: ProxyState.fruits,
    toppings: ProxyState.toppings
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('MarksFruit'))
  console.log(data)
  if (data != null) {
    ProxyState.fruits = data.fruits.map(p => new Fruit(p))
    ProxyState.toppings = data.toppings.map(t => new Topping(t))
  }

}