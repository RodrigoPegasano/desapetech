var express = require('express');
var router = express.Router();
var novoUsuarioController = require('../controllers/novoUsuarioController')

/* Rota cadastrar */
router.get('/novoUsuario', function(req, res, next) {
    res.render('novoUsuario', { title: 'Cadastrar Usuario' });
  });

module.exports = router;
