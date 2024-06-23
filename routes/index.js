var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', productController.index);
router.get('/search-results', productController.buscador)
module.exports = router;
