var express = require('express');
var router = express.Router();
var router = require("./alterarEndereco");

/* Rota Alterar Dados Pessoais */
router.get('/alterarDadosPessoais', function (req, res, next) {
    res.render('alterarDadosPessoais', { title: 'Alterar Dados Pessoais' });
});

module.exports = router