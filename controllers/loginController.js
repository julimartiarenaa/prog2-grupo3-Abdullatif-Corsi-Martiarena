const datos = require("../db/index")

const loginController = {
    login: function (req, res) {
        let usuario = datos.usuario
        res.render("login", {usuario: usuario})
    }
}




module.exports = loginController