const datos = require("../db/index");
let db = require("../database/models");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { where } = require("sequelize");

const userController = {

    profilePersonal: function (req, res) {
        //Si el usuario está logueado le mostrare su perfil
        if (req.session.user != undefined) {

            let idUsuario = req.session.user.id;

            db.Producto.findAll({
                //busco los productos que coincidan con el id del usuario
                where: {
                    vendedor_id: idUsuario
                }
            }).then(function (productos) {
                console.log(productos[0].id);
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
                    res.render('profile', { productos: productos, comentarios: comentarios, datosUsuario: datosUsuario })
                })
            })
                .catch(function (error) {
                    console.log(error);
                })

        } // Si no, lo redirigo para que se loguee
        else {
            return res.redirect('/users/login');
        }

    },

    profile: function (req, res) {
        let idUsuario = req.params.id;

        // Primero, chequeo que exista ese usuario en la base de datos.
        db.Usuario.findByPk(idUsuario)
            .then(function (usuario) {
                // Si existe, busco los datos del usuario.
                if (usuario != null) {
                    let datosUsuario = {
                        idUsuario: idUsuario,
                        usuario: usuario.usuario,
                        email: usuario.email,
                        fotoPerfil: usuario.foto_perfil
                    };

                    // Busco los productos que coincidan con el id del usuario
                    return db.Producto.findAll({
                        where: {
                            vendedor_id: idUsuario
                        }
                    })
                        .then(function (productos) {
                            // Una vez que tengo los productos, busco los comentarios.
                            return db.Comentario.findAll({
                                where: {
                                    comentador_id: idUsuario
                                }
                            })
                                .then(function (comentarios) {
                                    // Ahora que tengo todos los datos, renderizo al perfil.
                                    res.render('profile', {
                                        productos: productos, comentarios: comentarios, datosUsuario: datosUsuario
                                    });
                                });
                        });
                } else {
                    // Si no existe, lo redirijo a la pagina principal
                    res.redirect('/');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
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
            foto_perfil: '/images/users/' + form.profilePic
        };
        console.log(user);

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
        if (req.session.user == undefined) {
            if (errors.isEmpty()) {
                db.Usuario.findOne(filtro)

                    .then((usuario) => {
                        req.session.user = usuario;
                        if (form.rememberme != undefined) {
                            res.cookie("userId", usuario.id, { maxAge: 1000 * 60 * 35 })
                        }
                        return res.redirect("/");
                    })
            } else {
                return res.render('login', { errors: errors.mapped(), old: req.body })
            }
        } else {
            return res.redirect('/')
        }

    },
    logout: function (req, res) {
        req.session.destroy()
        res.clearCookie("userId")
        return res.redirect("/")
    }
};


module.exports = userController;