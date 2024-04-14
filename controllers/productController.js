const datos = require("../db/index")

const productController = {
    product: function (req, res) {
        let productos = datos.productos
        res.render("product", {productos: productos})
    },
    addProduct: function (req, res) {
        let productos = datos.productos
        res.render("product-add", {productos: productos})
    }
}

module.exports = productController;