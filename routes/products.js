const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { body } = require("express-validator");


let validation = [
    body("imagen")
    .notEmpty().withMessage("Debe incluir una imagen del producto"),

    body("nombre")
    .notEmpty().withMessage("Debe incluir un nombre del producto"),

    body("descripcion")
    .notEmpty().withMessage("Debe incluir una descripción del producto")
]

router.get('/:id', productController.product);
router.get('/delete/:id', productController.deleteProduct);
router.get('/product-add', productController.addProduct); 
router.post("/store", validation, productController.store); //--> es lo que va en el action 

module.exports = router