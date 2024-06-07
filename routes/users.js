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
        .isStrongPassword({ minLength: 5, minLowercase: 1, minUppercase: 1, minNumbers: 1}).withMessage('La contraseña deberá tener al menos 5 caracteres, 1 minúscula, 1 mayúscula y 1 número.'),
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
router.post('/login/store', userController.processLogin);

module.exports = router;
