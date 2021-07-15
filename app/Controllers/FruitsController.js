import { ProxyState } from "../AppState.js"
import { fruitsService } from "../Services/FruitsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let template = ''
  let fruits = ProxyState.fruits
  fruits.forEach(fruit => template += fruit.Template)
  document.getElementById('fruits').innerHTML = template
}