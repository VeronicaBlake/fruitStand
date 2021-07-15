import { ProxyState } from "../AppState.js"

class FruitsService{
    buy(id){
        let money = ProxyState.money
        let fruits= ProxyState.fruits.filter(fruit => fruit.id == id)
        if(fruits[0].stock ==0){
            window.alert("Out of Stock")
        }
        else{
        //subtract price from Money
        ProxyState.money= money-fruits[0].price
        
        //Checking that one doesn't exist yet
        let cart = ProxyState.cartItems
        //if you don't find the Id, print this to the page. If not, let the other stuff do its thing.
        if(!cart.find(e => e == id)){
            ProxyState.cartItems= [...ProxyState.cartItems, id]
        }

        //Moving one of that ID into Cart

        //decrement 1 from item's stock
        fruits[0].stock--
        console.log(ProxyState.fruits.filter(fruit=> fruit.id==id)[0].stock)

        fruits[0].quantity++
        console.log('cart', ProxyState.fruits.filter(fruit=> fruit.id==id)[0].quantity)
        }
    }
}

export const fruitsService = new FruitsService()