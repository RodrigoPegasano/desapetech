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


/* Rota Usuário Logado */
router.get('/usuarioLogado', function(req, res, next) {
  res.render('usuarioLogado', { title: 'Usuário Logado' });
});

module.exports = router;