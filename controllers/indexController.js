let db = require("../database/models")
const datos = require("../db/index")
let productos = datos.productos

const indexController = { 
    product: function (req, res) {
        db.Producto.findAll()
            .then(function (data) {
                return res.send(data)
            })
            .catch(function (error) {
                return console.log(error)
            })
        // res.render("index", {productos: productos})
    }
}

module.exports = indexController;