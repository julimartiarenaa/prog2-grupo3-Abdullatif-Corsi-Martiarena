const datos = require("../db/index")
let productos = datos.productos

const productController = {
    product: function (req, res) {
        res.render("product", {productos: productos})
    },
    addProduct: function (req, res) {
        res.render("product-add", {productos: productos})
    }
}

module.exports = productController;