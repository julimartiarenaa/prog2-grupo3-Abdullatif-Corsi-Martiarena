const datos = require("../db/index")
let db = require("../database/models")

const loginController = {
    login: function (req, res) {

        db.Usuario.findAll()
            .then(function(data))
                return  res.send(data)

        //let usuario = datos.usuario
        //res.render("login", {usuario: usuario})
    }
}

module.exports = loginController;