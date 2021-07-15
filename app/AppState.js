import Fruit from "./Models/Fruit.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  money = 100

  /** @type {Fruit[]} */
  fruits = [new Fruit({
    name: 'banana',
    price: 3,
    imgUrl: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 10,
    description: 'A cheery, yellow fruit. Loved by monkeys.',
    quantity: 0
  }),
  new Fruit({
    name: 'apple',
    price: 10,
    imgUrl: 'https://images.unsplash.com/photo-1590005354167-6da97870c757?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    stock: 10,
    description: 'A cheery, yellow fruit. Loved by monkeys.',
    quantity: 0
  })]

  cartItems = []
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
