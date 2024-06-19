const { validationResult } = require("express-validator")
let db = require("../database/models")

const commentController = {

    addComment: function (req, res) {
        return res.render("products")
    },

    storeComment: function (req, res) {
        let idProducto = req.params.id
        let errors = validationResult(req)
        if (req.session.user == undefined) {
            return res.redirect('/login')
        } else {
            if (errors.isEmpty()) {
                db.Comentario.create({
                    producto_id: idProducto,
                    comentador_id: req.session.user.id,
                    comentario: req.body.comentario,
                    url_foto_perfil: req.session.user.foto_perfil
                })
                    .then(function (comment) {
                        return res.redirect("/")
                    })
            } else {
                db.Producto.findByPk(idProducto, {
                    include: [
                        {
                            association: "comentarios",
                            separate: true,
                            order: [["createdAt", "ASC"]]
                        },
                        { association: "usuarios" }

                    ]
                })
                    .then(function (producto) {
                        console.log(producto.comentarios);
                        return db.Usuario.findAll()
                            .then(function (usuario) {
                                res.render('product', { errors: errors.mapped(), producto: producto, usuario: usuario })
                            })
                    })
            }
        }
    }

}


module.exports = commentController;