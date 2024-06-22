const db = require("../database/models")
let dbProducto = db.Producto;
const { validationResult } = require('express-validator');
const op = db.Sequelize.Op;


const productController = {

    buscador: function(req, res){
        let search = req.query.search
        db.Producto.findAll({
            where: {[op.or]: 
                [{nombre: {[op.like]: `%${search}%`}},
                {descripcion: {[op.like]: `%${search}%`}}
            ]}, 
            include: [
                {association: "comentarios"},
                {association: "usuarios"}
            ],
            order: [['createdAt', 'DESC']]
        })
        .then(function(results){
            return res.render("search-results", {search: search, productos: results})
        })
        .catch(function (error) {
            return console.log(error)
        })
    },

    index: function (req, res) {
        dbProducto.findAll({
            include: [
            {association: "comentarios"},
            {association: "usuarios"}],

            order: [["createdAt", "DESC"]]
        })
            .then(function (productos) {
                res.render("index", {productos: productos})
            })
            .catch(function (error) {
                return console.log(error)
            })

    },

    product: function (req, res) {
        let idProducto = req.params.id
        dbProducto.findByPk(idProducto, {include: [
            {association: "comentarios", 
                separate: true,
                order: [["createdAt", "DESC"]]
            },
            {association: "usuarios"}

        ]})
        .then(function (producto) {
                    return db.Usuario.findAll()
                    .then(function (usuario) {

                        res.render('product', {producto: producto, usuario: usuario})

                    })})
                .catch(function (error) {
                    console.log(error);
                })

    },
    deleteProduct: function (req, res) {
        let idProducto = req.params.id
        db.Producto.destroy({
            where:{
                id: idProducto
            }
        })
        .then(function (producto) {
            return res.redirect("/")
        })
        .catch(function (error) {
            console.log(error);
        })
    },

    addProduct: function (req, res) {

        return res.render("product-add")
    },

    create: function(req, res){

        // solo si el usuario esta logueado puede crear un producto
        if (req.session.user != undefined) {

            let idUsuario = req.session.user.id;
            // let usuario = req.session.user.nombre;

            let form = req.body;

            let product = {
                vendedor_id: idUsuario,
                // vendedor: usuario,
                url_imagen: form.imagen,
                nombre: form.nombre,
                descripcion: form.descripcion
            }
        } else {
            return res.redirect('/users/login');
        }

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Producto.create(product)
                .then(function(result){
                    return res.redirect("/")
                })
        } else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body })
        }

    },

    edit: function(req, res){ // completar/corregir toda esta parte

        if (req.session.user != undefined) {

            let idUsuario = req.session.user.id;
            // let usuario = req.session.user.nombre;

            let form = req.body;

            let product = {
                vendedor_id: idUsuario,
                // vendedor: usuario,
                url_imagen: form.imagen,
                nombre: form.nombre,
                descripcion: form.descripcion
            }
        } else {
            return res.redirect('/users/login');
        }

        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Producto.update(product, {where:[{id:form.id}]}) //product se puede reemplazar por form
                .then(function(result){
                    return res.redirect("/")
                })
        } else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body })
        }

    }

    // registerStore: function (req, res) {

    //     let form = req.body;

    //     let user = {
    //         email: form.email,
    //         usuario: form.usuario,
    //         contrasenia: bcrypt.hashSync(form.contrasenia, 10),
    //         fecha: form.birthday,
    //         dni: form.dni,
    //         foto_perfil: '/images/users/' + form.profilePic
    //     };

    //     console.log(user);

    //     let errors = validationResult(req);

    //     if (errors.isEmpty()) {
    //         db.Usuario.create(user)
    //             .then(function (result) {
    //                 return res.redirect("/")
    //             })
    //     } else {
    //         return res.render('register', { errors: errors.mapped(), old: req.body })
    //     }
    // },

}

module.exports = productController;



    