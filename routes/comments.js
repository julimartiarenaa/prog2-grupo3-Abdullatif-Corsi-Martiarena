const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const { body } = require("express-validator");