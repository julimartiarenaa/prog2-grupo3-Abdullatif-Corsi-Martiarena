const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { body } = require("express-validator");

router.get('/', productController.product);
router.get('/product-add', productController.addProduct); //es lo mismo product-add que product.create?
router.post("/store", productController.store); //--> es lo que va en el action

let validation = [
    body("imagen")
    .notEmpty().withMessage("Debe incluir una imagen del producto"),

    body("nombre")
    .notEmpty().withMessage("Debe incluir un nombre del producto"),

    body("descripcion")
    .notEmpty().withMessage("Debe incluir una descripción del producto")
]

module.exports = router