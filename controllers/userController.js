const datos = require("../db/index")
let db = require("../database/models")

const userController = {
    profile: function (req, res) {
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("profile", {productos: productos, usuario: usuario})    
    }, 
    editProfile: function (req,res) {
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("profile-edit", {productos: productos, usuario: usuario})
    },
    register: function (req, res) {
        let datosUsuario = datos.usuario;
        return res.render ('register', {datosUsuario: datosUsuario})
    },
    login: function (req, res) {
        let usuario = datos.usuario
        res.render("login", {usuario: usuario})
    }
};

module.exports = userController;