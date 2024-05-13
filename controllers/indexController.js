let db = require("../database/models")
const datos = require("../db/index")


const indexController = { 
    product: function (req, res) {
        db.Producto.findAll()
            .then(function (productos) {
                res.render("index", {productos: productos})
            })
            .catch(function (error) {
                return console.log(error)
            })
        // res.render("index", {productos: productos})
    }
}

module.exports = indexController;