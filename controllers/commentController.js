const { validationResult } = require("express-validator")
let db = require("../database/models")

const commentController = { 
        
    addComment: function(req, res){
        return res.render("products")
    },

    storeComment: function(req, res){
        let idProducto = req.params.id
        let errors= validationResult(req)
        if (errors.isEmpty()) {
            db.Comentario.create({
                producto_id: idProducto,
                comentador_id: req.session.user.id,
                comentario: req.body.comentario,
                url_foto_perfil: req.session.user.foto_perfil})
            .then(function (comment) {
                return res.redirect("/")
            })
            .catch(function (errors) {
                console.log(errors);
            })
              
        }else{
            //return res.render("product", {errors: errors.mapped()})
        }
    } 
    
}  


module.exports = commentController;