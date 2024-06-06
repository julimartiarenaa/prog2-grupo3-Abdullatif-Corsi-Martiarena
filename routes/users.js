const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require("express-validator");
let db = require("../database/models");

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

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', userController.profile);
router.get('/profile-edit', userController.editProfile);

router.get('/register', userController.registerCreate);
router.post('/register/store', userController.registerStore);

router.get('/login', userController.login);
router.post('/login/store', userController.processLogin);

module.exports = router;
