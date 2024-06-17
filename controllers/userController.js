const datos = require("../db/index");
let db = require("../database/models");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { where } = require("sequelize");

const userController = {
    profile: function (req, res) {
        //Si el usuario está logueado le mostrare su perfil
        if (req.session.user != undefined) {

            let idUsuario = req.session.user.id;

            db.Producto.findAll({ 
                //busco los productos que coincidan con el id del usuario
                where: {
                    vendedor_id: idUsuario
                }
            }).then(function (productos) {
                    // una vez que tengo los productos, busco los comentarios.
                    return db.Comentario.findAll({
                        where: {
                            comentador_id: idUsuario
                        }
                    }).then(function (comentarios) {
                    //defino los datos del usuario que necesito mostrar en la pagina

                        let datosUsuario = {
                            idUsuario: idUsuario,
                            usuario: req.session.user.usuario,
                            email: req.session.user.email,
                            fotoPerfil: req.session.user.foto_perfil
                    };
                    // una vez que tengo todo, renderizo a profile
                    res.render('profile', {productos: productos, comentarios:comentarios, datosUsuario: datosUsuario})
                })})
                .catch(function (error) {
                    console.log(error);
                })

        } // Si no, lo redirigo para que se loguee
        else {
            return res.redirect('/users/login');
        }

    },

    editProfile: function (req, res) {
        let productos = datos.productos
        let usuario = datos.usuario
        res.render("profile-edit", { productos: productos, usuario: usuario })
    },

    registerCreate: function (req, res) {

        return res.render('register')
    },

    registerStore: function (req, res) {

        let form = req.body;

        let user = {
            email: form.email,
            usuario: form.usuario,
            contrasenia: bcrypt.hashSync(form.contrasenia, 10),
            fecha: form.birthday,
            dni: form.dni,
            foto_perfil: form.profilePic
        };

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Usuario.create(user)
                .then(function (result) {
                    return res.redirect("/")
                })
        } else {
            return res.render('register', { errors: errors.mapped(), old: req.body })
        }
    },
    login: function (req, res) {
        //Si el usuario está logueado redirigirlo a home
        if (req.session.user != undefined) {
            return res.redirect('/')
        } else {
            return res.render('login');
        }
    },

    processLogin: function (req, res) {
        let form = req.body
        let errors = validationResult(req)
        //return res.send(errors.mapped())
        let filtro = {
            where: [{ email: form.email }]
        };

        if (errors.isEmpty()) {
            db.Usuario.findOne(filtro)

                .then((result) => {
                    req.session.user = result;
                    if (form.rememberme != undefined) {
                        res.cookie("userId", result.id, { maxAge: 1000 * 60 * 35 })
                    }
                    return res.redirect("/");
                })
        } else {
            return res.render('login', { errors: errors.mapped(), old: req.body })
        }

    },
    logout: function (req, res) {
        req.session.destroy()
        res.clearCookie("userId")
        return res.redirect("/")
    }
};


module.exports = userController;