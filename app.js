window.onload = function () {
        products = new Products(productos);
        products.init(productos);
        products.buildList('products-container', 'productos');

        myCart.populate();
    }

