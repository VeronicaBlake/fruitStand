import{generateId} from "../Utils/generateId.js"

export default class Fruit{
    constructor({name, price, imgUrl, stock, description, id = generateId() , quantity })
    {
        this.name = name, 
        this.price = price, 
        this.imgUrl = imgUrl, 
        this.stock = stock, 
        this.description = description,
        this.id = id, 
        this.quantity = 0
    }
    get Template(){
        return `
    <div class="col-4 mt-3">
      <div class="bg-light rounded shadow-light">
       <img class="w-100" src="${this.imgUrl}" alt="${this.name}" loading="lazy">
        <div class="d-flex justify-content-around align-items-center rounded-top text-center px-3">
            <h3>${this.name}</h3>
            <i class="fa fa-trash action text-danger" title="delete fruit" onclick="app.fruitsController.destroy('${this.id}')"></i>
        </div>
        <div class="px-2">
            <p>${this.description}</p>
            <p id="stock-${this.id}">${this.stock} in stock</p>
        </div> 
        <div class="d-flex">
          <p>$${this.price}</p>
          <button onclick="app.fruitsController.buy('${this.id}')" class="btn btn-outline-success">Buy</button>
          </div>
        
      </div>
    </div>`
    }
}
