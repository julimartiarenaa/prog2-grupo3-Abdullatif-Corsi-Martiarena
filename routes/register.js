const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")

router.get('/', userController.registerCreate);
router.post('/store', userController.registerStore);

module.exports = router; 