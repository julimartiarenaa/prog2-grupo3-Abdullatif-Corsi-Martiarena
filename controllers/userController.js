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
        res.render("login")
    },
    processLogin: function(req, res){
        let errors = validationResult(req)
        //return res.send(errors.mapped())
 
        if (errors.isEmpty()) {
         db.User.findOne({
             where: [{email:req.body.email}]
         })
         .then(function(usuarioEncontrado){
             //Ponerlos en session.
             req.session.user = {
                 email: usuarioEncontrado.email,
                 userName: usuarioEncontrado.name,
             }
             //Preguntar si el usuario tildó el checkbox para recordarlo
             // return res.send (req.body);
             if(req.body.recordarme != undefined){
                 res.cookie('cookieEspecial', 'el dato que quiero guardar', {maxAge: 1000*60*123123123})
             }
             //Y si el usuario quiere, agregar la cookie para que lo recuerde.
             
             return res.redirect('/');
         })
           .catch(function(e){
             console.log(e);
         })
         
        } else {
             return res.render("login", {errors: errors.mapped()})
        }
          
     }
};


module.exports = userController;