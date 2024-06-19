const { validationResult } = require("express-validator")
let db = require("../database/models")

const commentController = {

    addComment: function (req, res) {
        return res.render("products")
    },

    storeComment: function (req, res) {
        let idProducto = req.params.id
        let errors = validationResult(req)
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
                .catch(function (errors) {
                    console.log(errors);
                })

        } else {
            db.Producto.findByPk(idProducto, {
                include: [
                    { association: "comentarios" },
                    { association: "usuarios" }

                ]
            })
                .then(function (producto) {
                    return db.Usuario.findAll()
                        .then(function (usuario) {
                            res.render('product', {errors:errors.mapped(), producto: producto, usuario: usuario })
                        })
                })
                .catch(function (error) {
                    console.log(error);
                })

        }
    }

}


module.exports = commentController;