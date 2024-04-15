const datos = require("../db/index")

const profileController = {
    profile: function (req, res) {
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("profile", {productos: productos, usuario: usuario})    
    }, 
    editProfile: function (req,res) {
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("profile-edit", {productos: productos, usuario: usuario})
    }
};

module.exports = profileController;