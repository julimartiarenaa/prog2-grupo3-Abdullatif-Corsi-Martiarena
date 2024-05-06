const datos = require("../db/index");

let datosUsuario = datos.usuario;


const registerController = {
    register: function (req, res) {
        return res.render ('register', {datosUsuario: datosUsuario})
    }
};

module.exports = registerController;