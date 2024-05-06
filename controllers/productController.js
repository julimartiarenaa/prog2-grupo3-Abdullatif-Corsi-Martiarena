const db = require("../database/models")
let dbProducto = db.Producto;

const productController = {
    product: function (req, res) {
        dbProducto.Producto.findAll()
            .then(function (data) {
                return res.send(data)
            })
            .catch(function (error) {
                return console.log(error);
            })
        //res.render("product", {productos: productos})
    },
    addProduct: function (req, res) {
        dbProducto.Producto.findAll()
        .then(function (data) {
            return res.send(data)
        })
        .catch(function (error) {
            return console.log(error);
        })
        //let productos = datos.productos
        //let usuario = datos.usuario
        //res.render("product-add", {productos: productos, usuario: usuario})
    }
}

module.exports = productController;