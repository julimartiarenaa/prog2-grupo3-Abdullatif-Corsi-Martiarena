const datos = require("../db/index");
let db = require("../database/models");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator')

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

        let user = {
            email:form.email,
            usuario: form.usuario,
            contrasenia: bcrypt.hashSync(form.contrasenia, 10),
            fecha: form.birthday,
            dni: form.dni, 
            foto_perfil: form.profilePic
        }

        let errors = validationResult(req);

        if (errors.isEmpty()){
            db.Usuario.create(user)
            .then(function(result){
                return res.redirect("/")
            })
        } else {
            return res.render('register', {errors: errors.mapped(), old: req.body})
        }
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