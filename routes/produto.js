var express = require('express');
var router = express.Router();
var produtoController = require('../controllers/produtoController')

/* Rota Produto */
router.get('/produto', function (req, res, next) {
    res.render('produto', { title: 'Produto' });
});

/* Rota Produto */
router.get('/produto2', function (req, res, next) {
    res.render('produto2', { title: 'Produto' });
});

/* Rota Produto */
router.get('/produto3', function (req, res, next) {
    res.render('produto3', { title: 'Produto' });
});

/* Rota Produto */
router.get('/produto4', function (req, res, next) {
    res.render('produto4', { title: 'Produto' });
});

/* Rota Produto */
router.get('/produto5', function (req, res, next) {
    res.render('produto5', { title: 'Produto' });
});

/* Rota Produto */
router.get('/produto6', function (req, res, next) {
    res.render('produto6', { title: 'Produto' });
});

/* Rota Produto */
router.get('/produto7', function (req, res, next) {
    res.render('produto7', { title: 'Produto' });
});

/* Rota Produto */
router.get('/produto8', function (req, res, next) {
    res.render('produto8', { title: 'Produto' });
});

module.exports = router;