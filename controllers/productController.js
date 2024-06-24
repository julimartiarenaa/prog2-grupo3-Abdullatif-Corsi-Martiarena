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
                {descripcion: {[op.like]: `%${search}%`}}]}, 
            include: [
                {association: "comentarios"},
                {association: "usuarios"}
            ],
            order: [['createdAt', 'DESC']]
        })
        .then(function(results){
            console.log(results);
            console.log(search);
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
                // return res.send(productos)
                return res.render("index", {productos: productos})
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
        let idVendedor = req.params.idVendedor
        if (idVendedor == req.session.user.id) {
            db.Comentario.destroy({
                where:{
                    producto_id: idProducto
                }
            })
            .then(function (comentarios) {
                return db.Producto.destroy({
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
            })
            .catch(function (error) {
                console.log(error);
            })  
        } else {
            return res.redirect("/")
        }
    },

    addProduct: function (req, res) {

        return res.render("product-add")
    },

    create: function(req, res){

        let errors = validationResult(req);

        if (errors.isEmpty()) { 

            let idUsuario = req.session.user.id;   
    
            let form = req.body;
    
            let product = {
                vendedor_id: idUsuario,
                url_imagen: form.url_imagen,
                nombre: form.nombre,
                descripcion: form.descripcion
            }
            db.Producto.create(product)
                .then(function(results){
                    return res.redirect("/products/id/" + results.id)
                })
           
        } else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body })
        }

    },

    editProduct: function(req, res){ 

        let id = req.params.id

        db.Producto.findByPk(id, {include: [{ association: 'usuarios' }]})
            .then(function (results){
                return res.render("product-edit", {producto: results})
            })
            .catch(function (error) {
                console.log(error);
            })
        },



    edit: function(req, res){

        let errors = validationResult(req);

        if (errors.isEmpty()) { //si no hay errores, mandar info del form y redirigir al producto editado
            
            // if (req.session.user != undefined) {   //Si el usuario está logueado puede editar el producto 

                let idUsuario = req.session.user.id;
                // return res.send(req.session.user)

                let form = req.body

                let product = {
                    vendedor_id: idUsuario,
                    url_imagen: form.url_imagen,
                    nombre: form.nombre,
                    descripcion: form.descripcion
                }
                return res.send(product)

                db.Producto.update(product, {where: [{id: form.id}]})
                    .then(function (result){
                        return res.redirect("/products/id/" + result.id)
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            // } // Si no, lo redirigo para que se loguee
            // else {
            //     return res.redirect('/users/login');
            // }

        } else { //si HAY errores, mostrarlos en la vista

            let id = req.params.id

            db.Producto.findByPk(id, {include: [{ association: 'usuarios' }]})
                .then(function (results){
                    return res.render('product-edit', { producto: results, errors: errors.mapped(), old: req.body })
                })
                .catch(function (error) {
                    console.log(error);
                })

        }
        
    }

    
}

module.exports = productController;



    