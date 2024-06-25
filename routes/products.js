const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { body } = require("express-validator");


let validationCreate = [
    body("url_imagen")
    .notEmpty().withMessage("Debe incluir una imagen del producto")
    .custom(function (value, {req}) { //esta validacion permite que no se cargen imagenes rotas en los productos
        let imagenes = ['iphone_8_plus.jpg', 'iphone_11_pro.jpg','iphone_12_mini.jpg','iphone_13_pro_max.jpg','iphone_13.jpg','iphone_se_2020.jpg','iphone_xr.jpg','iphone_xs.jpg', 'samsung_a52.jpg', 'samsung_s21_ultra.jpg' ];
        if (!imagenes.includes(value)) {
            throw new Error('Por favor ingrese una de las siguientes imagenes: iphone_8_plus.jpg, iphone_11_pro.jpg, iphone_12_mini.jpg, iphone_13_pro_max.jpg, iphone_13.jpg, iphone_se_2020.jpg, iphone_xr.jpg, iphone_xs.jpg, samsung_a52.jpg, samsung_s21_ultra.jpg')
        }
        return true
    }),

    body("nombre")
    .notEmpty().withMessage("Debe incluir un nombre del producto").bail(),

    body("descripcion")
    .notEmpty().withMessage("Debe incluir una descripción del producto").bail()
]

let validationEdit = [
    body("url_imagen")
    .notEmpty().withMessage("Debe incluir una imagen del producto")
    .custom(function (value, {req}) { //esta validacion permite que no se cargen imagenes rotas en los productos
        let imagenes = ['iphone_8_plus.jpg', 'iphone_11_pro.jpg','iphone_12_mini.jpg','iphone_13_pro_max.jpg','iphone_13.jpg','iphone_se_2020.jpg','iphone_xr.jpg','iphone_xs.jpg', 'samsung_a52.jpg', 'samsung_s21_ultra.jpg' ];
        if (!imagenes.includes(value)) {
            throw new Error('Por favor ingrese una de las siguientes imagenes: iphone_8_plus.jpg, iphone_11_pro.jpg, iphone_12_mini.jpg, iphone_13_pro_max.jpg, iphone_13.jpg, iphone_se_2020.jpg, iphone_xr.jpg, iphone_xs.jpg, samsung_a52.jpg, samsung_s21_ultra.jpg')
        }
        return true
    }),
    body("nombre")
    .notEmpty().withMessage("Debe incluir un nombre del producto").bail(),

    body("descripcion")
    .notEmpty().withMessage("Debe incluir una descripción del producto").bail()
]

router.get('/id/:id', productController.product);
router.get('/delete/:id/:idVendedor', productController.deleteProduct);

router.get('/product-add', productController.addProduct); 
router.post("/create", validationCreate, productController.create);  

router.get('/product-edit/:id', productController.editProduct); 
router.post("/edit", validationEdit, productController.edit);  


module.exports = router