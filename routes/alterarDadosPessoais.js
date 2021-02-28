var express = require('express');
var router = express.Router();
var alterarDadosPessoaisController = require('../controllers/alterarDadosPessoaisController')

/* Rota Alterar Dados Pessoais */
router.get('/alterarDadosPessoais', function (req, res, next) {
    res.render('alterarDadosPessoais', { title: 'Alterar Dados Pessoais' });
});

module.exports = router