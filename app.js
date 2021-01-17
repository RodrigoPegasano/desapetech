var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
=======
var session = require('express-session');
>>>>>>> d4663b2edfdbccc76a504995288b10ff87cb2948

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

<<<<<<< HEAD
=======
app.use(
  session({
    secret: 'projeto-desapetech',
    resave: true,
    saveUninitialized: true,
  })
);

>>>>>>> d4663b2edfdbccc76a504995288b10ff87cb2948
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
<<<<<<< HEAD
app.use(function(req, res, next) {
=======
app.use(function (req, res, next) {
>>>>>>> d4663b2edfdbccc76a504995288b10ff87cb2948
  next(createError(404));
});

// error handler
<<<<<<< HEAD
app.use(function(err, req, res, next) {
=======
app.use(function (err, req, res, next) {
>>>>>>> d4663b2edfdbccc76a504995288b10ff87cb2948
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
