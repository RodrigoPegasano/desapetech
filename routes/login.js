var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')

/* Rota Login */
router.get('/login', loginController.renderizar);

module.exports = router;