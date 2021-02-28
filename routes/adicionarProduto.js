var express = require('express');
var router = express.Router();

/* Rota Adicionar Produto */
router.get('/adicionarProduto', function (req, res, next) {
    res.render('adicionarProduto', { title: 'Adicionar Produto' });
});

module.exports = router