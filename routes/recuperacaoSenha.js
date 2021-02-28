var express = require('express');
var router = express.Router();
var recuperacaoSenhaController = require('../controllers/recuperacaoSenhaController')

/* Rota Recuperação Senha */
router.get('/recuperacaosenha', function(req, res, next) {
    res.render('recuperacaoSenha', { title: 'Recuperacao Senha' });
  });

module.exports = router