const db = require("../database/models")
let dbProducto = db.Producto;

const productController = {

    index: function (req, res) {
        dbProducto.findAll({include: [
            {association: "comentario"},
            {association: "usuario"}
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
            {association: "comentario"},
            {association: "usuario"}
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

        return res.render("product-add")
    },

    store: function(req, res){

        let form = req.body;
        db.Producto.create(form)

        .then(function(result){
            return res.redirect("/")
        })
        .catch(error=>console.log(error))

    },

}


/* {include: [
    {association: "comentarios"},
    {association: "usuarios"}
]}*/
module.exports = productController;