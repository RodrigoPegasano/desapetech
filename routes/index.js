var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Rota cadastro OK */
// router.get('/cadastrook', function(req, res, next) {
//   res.render('cadastroOK', { title: 'Cadastro OK' });
// });

/* Rota Recuperação OK */
// router.get('/recuperacaook', function(req, res, next) {
//   res.render('recuperacaook', { title: 'Recuperacao Senha OK' });
// });

/* Rota Carrinho */
router.get('/carrinho', function(req, res, next) {
  res.render('carrinho', { title: 'Carrinho' });
});

/* Rota Pagamento */
router.get('/pagamento', function(req, res, next) {
  res.render('pagamento', { title: 'Pagamento' });
});

/* Rota Alterar Endereço */
router.get('/alterarEndereco', function(req, res, next) {
  res.render('alterarEndereco', { title: 'Alterar Endereço' });
});

/* Rota Alterar Dados Pessoais */
router.get('/alterarDadosPessoais', function(req, res, next) {
  res.render('alterarDadosPessoais', { title: 'Alterar Dados Pessoais' });
});

/* Rota Usuário Logado */
router.get('/usuarioLogado', function(req, res, next) {
  res.render('usuarioLogado', { title: 'Usuário Logado' });
});

module.exports = router;