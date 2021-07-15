import { ProxyState } from "../AppState.js"
import { fruitsService } from "../Services/FruitsService.js"
//import { fruitsService } from "../Services/FruitsService.js"
//import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
  let template = ''
  let fruits = ProxyState.fruits
  fruits.forEach(fruit => template += fruit.Template)
  document.getElementById('fruits').innerHTML = template
}

function _drawMoney(){
    let money = ProxyState.money
    document.getElementById('available-money').innerText =`$` + money
}
function _drawStock(id){
    let stock = ProxyState.fruits.filter(fruit => fruit.id == id)

    document.getElementById('stock-'+ id).innerText = stock[0].stock + ` in stock`
}
function _drawCart(){
    let template = ``
    ProxyState.cartItems.forEach(item => {
        let cartItem = ProxyState.fruits.filter(fruit => fruit.id == item)
        template += `
        <div class="col d-flex" >
                <h3>${cartItem[0].name}: </h3>
                <p>$${cartItem[0].price} </p>
                <p>quantity: ${cartItem[0].quantity}</p>
            </div>
        `
     })

    document.getElementById('cart').innerHTML = template
}

export default class FruitsController{
    constructor(){
        _draw()
        _drawMoney()
    }
    buy(id){
        //fruitsService needs to run first to update the stock
        fruitsService.buy(id)
        _drawStock(id)
        _drawCart()
    }
}