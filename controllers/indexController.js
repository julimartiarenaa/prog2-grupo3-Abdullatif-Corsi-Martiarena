const datos = require("../db/index")
let productos = datos.productos

const indexController = { 
    product: function (req, res) {
        res.render("index", {productos: productos})
    }
}

module.exports = indexController;