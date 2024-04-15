const express = require('express');
const router = express.Router();
const profileController = require("../controllers/profileController")

router.get('/', profileController.profile);
router.get('/profile-edit', profileController.editProfile)

module.exports = router;