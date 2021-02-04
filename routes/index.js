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

/* Rota cadastrar */
router.get('/novoUsuario', function(req, res, next) {
  res.render('novoUsuario', { title: 'Cadastrar Usuario' });
});

/* Rota cadastro OK */
router.get('/cadastrook', function(req, res, next) {
  res.render('cadastroOK', { title: 'Cadastro OK' });
});

/* Rota Recuperação Senha */
router.get('/recuperacaosenha', function(req, res, next) {
  res.render('recuperacaoSenha', { title: 'Recuperacao Senha' });
});

/* Rota Recuperação OK */
router.get('/recuperacaook', function(req, res, next) {
  res.render('recuperacaook', { title: 'Recuperacao Senha OK' });
});

/* Rota Carrinho */
router.get('/carrinho', function(req, res, next) {
  res.render('carrinho', { title: 'Carrinho' });
});

/* Rota Pagamento */
router.get('/pagamento', function(req, res, next) {
  res.render('pagamento', { title: 'Pagamento' });
});

module.exports = router;
