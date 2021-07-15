export default class Fruit{
    constructor({name, price, imgUrl, stock, description, id = generateId() })
    {
        this.name = name, 
        this.price = price, 
        this.imgUrl = imgUrl, 
        this.stock = stock, 
        this.description = description,
        this.id = id
    }
    get Template(){
        return `
    <div class="col-4 mt-3">
      <div class="bg-light rounded shadow-light">
       <img src="${this.imgUrl}" width="100" height="45" alt="${this.name}" loading="lazy">
        <div class="d-flex justify-content-around align-items-center rounded-top text-light text-center p-3">
            <h3>${this.name}</h3>
            <i class="fa fa-trash action text-danger" title="delete fruit" onclick="app.fruitsController.destroy('${this.id}')"></i>
        </div>
        <div class="p-2">
            <p>${this.description}</p>
            <p>${this.price}</p>
            <p>${this.stock}</p>
        </div>
        <form onsubmit="app.fruitsController.addFruit('${this.id}')"> 
          <input type="text" name="fruit" placeholder="Fruit..." required>
          <button type="submit" class="btn btn-outline-success">+</button>
        </form>
      </div>
    </div>`
    }
}
