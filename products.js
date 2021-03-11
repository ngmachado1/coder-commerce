//1 Crear objetos
var productos = [
    {
        img : "https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Samsung-Notebook-Flash-4.jpg",
        price : 85999
    },
    {
        img : "https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Samsung-Notebook-Flash-4.jpg",
        price : 85999
    },
    {
        img : "https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Samsung-Notebook-Flash-4.jpg",
        price : 85999
    }
]


//2 lleno mi html con los objetos de forma dinamica

function Products(productos) {
    //llena todo lo de la lista
    
    this.productos = [];

    this.init = function(productos) {
        this.productos = productos;
    }

    this.getById = function(id) {
        return this.productos.filter(product=> product.id === id);
    }

    this.buildHtmlProduct = function(article) {

        return `
        <div class="col-md-3 col-xl-4 col-sm-12 mt-3">
            <article class="card text-center">
            <img class="w-100"
                src="${article.img}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6>$${article.price}</h6>
                <p class="card-text">Some quick example text to build on the card title and make up
                    the bulk
                    of the card's content.</p>
                <a href="#" class=" btn btn-outline-dark">COMPRAR</a>
            </div>
            </article>
        </div>
        `
    }

    this.buildList = function(containerId, sourceProduct) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = '';

        this[sourceProduct].forEach(product => {
            html = html + this.buildHtmlProduct(product); 
        });
        
        container.innerHTML = html;
    }



}





// console.log(price)
// console.log(price.innerHTML)


// var descuento = parseFloat(price.innerHTML)*0.9;

//  console.log(descuento);

// price.innerHTML = descuento.toFixed(2);

// console.log(price)
// console.log(price.innerHTML)




// console.log("desde script")
// let botonForm = document.getElementById('submit');
// console.log(botonForm)
// var valor = document.getElementById("email").value;
// console.log(valor)
