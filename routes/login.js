const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const { body } = require('express-validator');
let db = require("../database/models")

let loginValidations = [
    body("email")
        .notEmpty().withMessage("Por favor complete el campo email")
        .isEmail().withMessage("Por favor ingrese un email válido")
        .custom(function (value) { 

            return db.Usuario.findOne({
                where: { email:value }
            })
            .then( function (usuario) {
                if (!usuario) {
                    throw new Error("El email no se encuentra registrado")
                } 
            })
            
        }),
    body("password")
        .notEmpty().withMessage("Por favor complete el campo contraseña")
        
]

router.get('/', userController.login);
router.post('/store', userController.processLogin);
/* Revisar los nombres create y store*/

module.exports = router