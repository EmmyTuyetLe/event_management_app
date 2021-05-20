const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/authControllers');

router.post('/signup', AuthController.registerNewUser);
router.post('/login', AuthController.loginUser);
module.exports = router;