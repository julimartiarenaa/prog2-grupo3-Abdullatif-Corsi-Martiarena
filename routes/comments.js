const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { body } = require("express-validator");

let commetnsValidations = [
    body("comentario")
        .notEmpty().withMessage('Por favor, complete el campo comentario.').bail()
        .isLength({min:3}).withMessage('Su comentario debe superar los 3 caracteres').bail()
]

router.get("/addComment", commentController.addComment);
router.post("/addComment/:id", commetnsValidations, commentController.storeComment);

module.exports = router;