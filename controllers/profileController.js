const datos = require("../db/index")
const datosU = datos.usuario

const profileController = {
    profile: function (req, res) {
        return res.render ('profile', {datosU: datosU})
    }, 
    editProfile: function (req,res) {
        return res.render ('profile-edit', {datos: datosU})
    }
};

module.exports = profileController;