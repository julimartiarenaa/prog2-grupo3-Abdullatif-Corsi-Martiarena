const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")

router.get('/', userController.profile);
router.get('/profile-edit', userController.editProfile)

module.exports = router;