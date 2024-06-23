const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { body } = require("express-validator");


let validationCreate = [
    body("url_imagen")
    .notEmpty().withMessage("Debe incluir una imagen del producto").bail(),

    body("nombre")
    .notEmpty().withMessage("Debe incluir un nombre del producto").bail(),

    body("descripcion")
    .notEmpty().withMessage("Debe incluir una descripción del producto").bail()
]

let validationEdit = [
    body("url_imagen")
    .notEmpty().withMessage("Debe incluir una imagen del producto").bail(),

    body("nombre")
    .notEmpty().withMessage("Debe incluir un nombre del producto").bail(),

    body("descripcion")
    .notEmpty().withMessage("Debe incluir una descripción del producto").bail()
]

router.get('/id/:id', productController.product);
router.get('/delete/:id/:idVendedor', productController.deleteProduct);
router.get('/product-add', productController.addProduct); // lo que va en la url
router.post("/create", validationCreate, productController.create); //--> es lo que va en el action 
router.get('/product-edit/:id', productController.editProduct); // lo que va en la url
router.post("/edit", validationEdit, productController.edit); //--> es lo que va en el action 


module.exports = router