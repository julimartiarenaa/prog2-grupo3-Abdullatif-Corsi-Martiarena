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

            console.log(idUsuario);

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
                    //busco los datos del usuario que necesito mostrar en la pagina
                    return db.Usuario.findByPk(idUsuario)
                        .then(function (usuario) {
                            console.log(usuario);
                            //defino los datos de la persona que ests en sesion.
                            let idSession = req.session.user.id
                            console.log(idSession);
                            //una vez que tengo todo, renderizo a profile.
                            res.render('profile', {productos: productos, comentarios: comentarios, datosUsuario: usuario, logueado: true, idSession: idSession })

                        })
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
                // Si existe, comienzo con mi recoleccion de datos.
                if (usuario != null) {
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
                                    //busco los datos de la persona buscada. 
                                    return db.Usuario.findByPk(idUsuario)
                                        .then(function (usuario) {
                                            //defino los datos de la persona que esta en sesion.
                                            let logueado = undefined;

                                            if (req.session.user != undefined) {
                                                logueado = true
                                                let idSession = req.session.user.id
                                                //si la persona que esta buscando esta logueada, tambien renderizo sus datos.
                                                res.render('profile', { productos: productos, comentarios: comentarios, datosUsuario: usuario, logueado: logueado, idSession: idSession });
                                            };

                                            // si la persona que esta buscando no esta logueada, renderizo al perfil estos datos. 
                                            res.render('profile', { productos: productos, comentarios: comentarios, datosUsuario: usuario, logueado: false, idSession: undefined });
                                        })
                                });
                        });
                } else {
                    // Si no existe la persona que quiere buscar, lo redirijo a index
                    res.redirect('/');
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    editProfile: function (req, res) {
        //si el usuario esta logueado, dejo que modifique sus datos.
        if (req.session.user != undefined) {
            //recupero sus datos anteriores asi los muestro en la vista.
            let idUsuario = req.session.user.id;
            db.Usuario.findByPk(idUsuario)
                .then(function (usuario) {
                    return res.render('profile-edit', { datosUsuario: usuario })
                })

        } // sino lo mando para que se logue
        else {
            res.redirect('/users/login')
        }
    },

    editProfileStore: function (req, res) {
        //recupero los datos del usuario, que ya esta logueado, sino no estaria aca.

        let form = req.body;

        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let user = {
                id: req.session.user.id,
                usuario: form.usuario,
                email: form.email,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                fecha: form.birthday,
                dni: form.dni,
                foto_perfil: '/images/users/' + form.profilePic
            };

            db.Usuario.update(user,
                {
                    where: {
                        id: req.session.user.id
                    }
                }
            ).then(function (usuario) {
                res.redirect('/')
            })

        } else {
            console.log('estoy en el else');
            let idUsuario = req.session.user.id;
            db.Usuario.findByPk(idUsuario)
                .then(function (usuario) {
                    return res.render('profile-edit', { errors: errors.mapped(), old: req.body, datosUsuario: usuario })
                })
        }

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