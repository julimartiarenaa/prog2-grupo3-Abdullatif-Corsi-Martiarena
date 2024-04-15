const datos = require("../db/index");
let datosUsuario = datos.usuario;

//no se que hacer con el controlador.

const registerController = {
    register: function (req, res) {
        return res.render ('register', {datosUsuario: datosUsuario})
    }
};

module.exports = registerController;