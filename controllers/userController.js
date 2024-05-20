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
    registerCreate: function (req, res) {

        return res.render ('register')

    },
    registerStore: function(req, res) {
        let form = req.body;
        db.Usuario.create(form)
        .then(function(result){
            console.log("estoy en el then")
            return res.redirect("/")
        })
        .catch(error=> console.log(error))
    },
    login: function (req, res) {
        let usuario = datos.usuario
        res.render("login", {usuario: usuario})
    }
};

module.exports = userController;