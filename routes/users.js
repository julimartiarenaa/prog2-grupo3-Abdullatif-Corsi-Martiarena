const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require("express-validator");
let db = require("../database/models");
const { compareSync } = require('bcryptjs');

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
      .custom(function (value, {req}) { 

        db.Usuario.findOne({
            where: { email: req.body.email }
        })
        .then( function (usuario) {
            if (!usuario) {
                throw new Error("Conta")
            } 
            else{
                compareSync
            }
        })
        
    })
      
]

const registerValidations = [
    body('email')
        .notEmpty().withMessage('Por favor complete el campo email.')
        .isEmail().withMessage('Por favor ingrese un email válido.')
        .custom(function (value) {
            return db.Usuario.findOne({
                where: {email: value}
            })
            .then(function (usuario) {
               if (usuario) {
                throw new Error ('El mail ingresado ya se encuentra registrado')
                }
            })
        }),
    body('usuario')
        .notEmpty().withMessage('Por favor, complete el campo usuario.'),
    body('contrasenia')
        .notEmpty().withMessage('Por favor, complete el campo contraseña.')
        .isStrongPassword({minLength: 6, minUppercase:2, minLowercase:4, minNumbers: 0, minSymbols:0}).withMessage('La contraseña debe tener 6 caracteres y al menos dos mayusculas.'),
    body('birthday')
        .notEmpty().withMessage('Por favor, complete el campo fecha de nacimiento.')
        .isDate().withMessage('Por favor, ingrese la fecha en formato AAA/MM/DD'),
    body('dni')
        .notEmpty().withMessage('Por favor, complete el campo DNI.')
        .isInt().withMessage('Por favor, el campo solo debe tener numeros.'),
    body('profilePic')
        .notEmpty().withMessage('Por favor, ingrese una foto')
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', userController.profile);
router.get('/profile-edit', userController.editProfile);

router.get('/register', userController.registerCreate);
router.post('/register/store', registerValidations , userController.registerStore);

router.get('/login', userController.login);
router.post('/login', userController.processLogin);

router.post('/logout', userController.logout);
module.exports = router;
