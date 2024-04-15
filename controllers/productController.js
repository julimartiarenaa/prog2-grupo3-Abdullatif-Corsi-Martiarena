const datos = require("../db/index")
let productos = datos.productos

const productController = {
    product: function (req, res) {
        res.render("product", {productos: productos})
    },
    addProduct: function (req, res) {
<<<<<<< HEAD
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("product-add", {productos: productos, usuario: usuario})
=======
        res.render("product-add", {productos: productos})
>>>>>>> 84d16cf20de6aed8c4dee4558f121110c7454442
    }
}

module.exports = productController;