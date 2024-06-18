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
        let idProducto = req.params.id
        dbProducto.findByPk(idProducto, {include: [
            {association: "comentarios"},
            {association: "usuarios"}

        ]})
        .then(function (producto) {

                    return db.Usuario.findAll()
                    .then(function (usuario) {
                    

                    res.render('product', {producto: producto, usuario: usuario})
                })})
                .catch(function (error) {
                    console.log(error);
                })

    },
    deleteProduct: function (req, res) {
        let idProducto = req.params.id
        db.Producto.destroy({
            where:{
                id: idProducto
            }
        })
        .then(function (producto) {
            return res.redirect("/")
        })
        .catch(function (error) {
            console.log(error);
        })
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