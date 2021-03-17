
function ShoppingCart() {
    //una lista que guarda los elementos
    this.cart = [];
    this.populateCart = document.getElementById('mi-carrito');
    //trae los elementos que hay en localstorage
    this.populate = function () {
        this.cart = (localStorage.getItem('cartAfter')) ? JSON.parse(localStorage.getItem('cartAfter')) : [];
        if (this.cart.length > 0) {
            this.cart.forEach(product => {
                this.addItemToCartList(product);
            });
        }
        
    }
    //metodo que llena el array
    this.add = function (item) {
        var foundProduct = productos.find(producto => producto.id == item);
        this.cart.push(foundProduct);
        this.addItemToCartList(foundProduct);
        localStorage.setItem('cartAfter', JSON.stringify(this.cart));
    }

    this.addItemToCartList = function(product) {
        this.populateCart.innerHTML += `<li><b>${product.title}</b> | ${product.price}</li>`;
        this.getTotal();
    }

    this.getTotal = function() {
        var subtotal = 0;
        this.cart.forEach(product => {
            subtotal += product.price;
        })
        document.getElementById('subtotal').innerText = '$'+subtotal;
        document.getElementById('total').innerText = '$'+subtotal*1.21;
    }
}

var myCart = new ShoppingCart();