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
  
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.get('/login', loginRouter);
  app.get('/novoUsuario', novoUsuarioRouter);
  app.get('/produto', produtoRouter);
  app.get('/recuperacaoSenha', recuperacaoSenhaRouter);
  app.get('/carrinho', carrinhoRouter);
  app.get('/pagamento', pagamentoRouter);
  app.get('/alterarEndereco', alterarEnderecoRouter);

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
