var express = require('express');
var router = express.Router();
var novoUsuarioController = require('../controllers/novoUsuarioController')

/* Rota cadastrar */
router.get('/', novoUsuarioController.renderizar);

router.post('/', novoUsuarioController.salvarDadosUsuario);

module.exports = router;
