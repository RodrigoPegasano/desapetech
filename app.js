var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var novoUsuarioRouter = require('./routes/novoUsuario');
var produtoRouter = require('./routes/produto');
var recuperacaoSenhaRouter = require('./routes/recuperacaoSenha');
var carrinhoRouter = require('./routes/carrinho');
var pagamentoRouter = require('./routes/pagamento');
var alterarEnderecoRouter = require('./routes/alterarEndereco');
var alterarDadosPessoaisRouter = require('./routes/alterarDadosPessoais');
var usuarioLogadoRouter = require('./routes/usuarioLogado');
var adicionarProdutoRouter = require('./routes/adicionarProduto');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'projeto-desapetech',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(session({
  secret:"projetoDesapetech",
  resave: true,
  saveUninitialized:true
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/login', loginRouter);
app.use('/novoUsuario', novoUsuarioRouter);
app.get('/produto', produtoRouter);

app.get('/produto2', produtoRouter);
app.get('/produto3', produtoRouter);
app.get('/produto4', produtoRouter);
app.get('/produto5', produtoRouter);
app.get('/produto6', produtoRouter);
app.get('/produto7', produtoRouter);
app.get('/produto8', produtoRouter);

app.get('/recuperacaoSenha', recuperacaoSenhaRouter);
app.get('/carrinho', carrinhoRouter);
app.get('/pagamento', pagamentoRouter);
app.get('/alterarEndereco', alterarEnderecoRouter);
app.get('/alterarDadosPessoais', alterarDadosPessoaisRouter);
app.get('/usuarioLogado', usuarioLogadoRouter);
app.get('/adicionarProduto', adicionarProdutoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;