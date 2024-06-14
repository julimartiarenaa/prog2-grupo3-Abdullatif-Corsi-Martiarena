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
        };
        
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
        //Si el usuario está logueado redirigirlo a home
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
            return res.render('login');
        }
    },
    
    processLogin: function(req, res){
        let form = req.body
        let errors = validationResult(req)
        //return res.send(errors.mapped())
        let filtro = {
            where: [{email: form.email}]   
        };

        if (errors.isEmpty()) {
         db.Usuario.findOne(filtro)
         
         .then((result)=>{
            if (result != null) {
                let check = bcrypt.compareSync(form.password, result.contrasenia);
                if (check) {
                    if (form.rememberme != undefined) {
                        res.cookie("userId", result.id, {maxAge: 1000 * 60*15})
                    }
                }
                return res.redirect("/");
            } else {

            }

         })
           
         .catch(function(e){
            console.log(e);
        })
         
        } else {
             return res.render("login", {errors: errors.mapped()})
        }
          
     },
     logout: function (req, res) {
        req.session.destroy()
        res.clearCookie("userId")
        return res.redirect("/")
     }
};


module.exports = userController;