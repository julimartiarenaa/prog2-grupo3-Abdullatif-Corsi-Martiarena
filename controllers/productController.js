const datos = require("../db/index")
let productos = datos.productos

const productController = {
    product: function (req, res) {
        res.render("product", {productos: productos})
    },
    addProduct: function (req, res) {
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("product-add", {productos: productos, usuario: usuario})
    }
}

module.exports = productController;