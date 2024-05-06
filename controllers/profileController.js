const datos = require("../db/index")
let db = require("../database/models")


const profileController = {
    profile: function (req, res) {
        let productos = datos.productos

        db.Usuario.findAll()
        .then(function(data){
            return  res.send(data)
        }
        )

        //let usuario = datos.usuario
        //res.render("profile", {productos: productos, usuario: usuario})    
    }, 
    editProfile: function (req,res) {
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("profile-edit", {productos: productos, usuario: usuario})
    }
};

module.exports = profileController;