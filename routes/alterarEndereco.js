var express = require('express');
var router = express.Router();
var alterarEnderecoController = require('../controllers/alterarEnderecoController')

/* Rota Alterar Endereço */
router.get('/alterarEndereco', function (req, res, next) {
    res.render('alterarEndereco', { title: 'Alterar Endereço' });
});

module.exports = router;