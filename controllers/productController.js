const db = require("../database/models")
let dbProducto = db.Producto;

const productController = {
    index: function (req, res) {
        dbProducto.findAll({include: [
            {association: "comentarios"},
            {association: "usuarios"}
        ]})
            .then(function (productos) {
                res.render("index", {productos: productos})
            })
            .catch(function (error) {
                return console.log(error)
            })

    },
    product: function (req, res) {
        dbProducto.findAll({include: [
            {association: "comentarios"},
            {association: "usuarios"}
        ]}) //CAMBIOS
            .then(function (data) {
                return res.send(data)
            })
            .catch(function (error) {
                return console.log(error);
            })
        //res.render("product", {productos: productos})
    },
    addProduct: function (req, res) {
        dbProducto.findAll({include: [
            {association: "comentarios"},
            {association: "usuarios"}
        ]}) //CAMBIOS
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


/* {include: [
    {association: "comentarios"},
    {association: "usuarios"}
]}*/
module.exports = productController;