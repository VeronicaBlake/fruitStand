import Fruit from "./Models/Fruit.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Fruit[]} */
  
  fruits = [new Fruit({
    name: 'banana',
    price: 3,
    imgUrl: 'https://unsplash.com/photos/0v_1TPz1uXw',
    stock: 10,
    description: 'A cheery, yellow fruit. Loved by monkeys.'
  })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
