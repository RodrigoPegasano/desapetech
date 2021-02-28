var express = require('express');
var router = express.Router();
var usuarioLogadoController = require('../controllers/usuarioLogadoController')

/* Rota Usuário Logado */
router.get('/usuarioLogado', function(req, res, next) {
    res.render('usuarioLogado', { title: 'Usuário Logado' });
});

module.exports = router;