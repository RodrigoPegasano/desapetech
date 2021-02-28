var express = require('express');
var router = express.Router();
var carrinhoController = require('../controllers/carrinhoController')

/* Rota Carrinho */
router.get('/carrinho', function (req, res, next) {
    res.render('carrinho', { title: 'Carrinho' });
});

module.exports = router;