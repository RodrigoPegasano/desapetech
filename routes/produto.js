var express = require('express');
var router = express.Router();
var produtoController = require('../controllers/produtoController')

/* Rota Produto */
router.get('/produto', function (req, res, next) {
    res.render('produto', { title: 'Produto' });
});

module.exports = router;