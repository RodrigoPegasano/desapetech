var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* Rota Produto */
router.get('/produto', function(req, res, next) {
  res.render('produto', { title: 'Produto' });
});

/* Rota Login */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
