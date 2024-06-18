const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require("express-session");
const db = require("./database/models");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');
const commentRouter = require('./routes/comments');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
  secret: "ti",
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
	if (req.session.user != undefined) {
		res.locals.user = req.session.user	
  }
  
  return next();
}
);

app.use(function (req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {
    let id = req.cookies.userId;
    db.Usuario.findByPk(id)
    .then((result)=>{
      req.session.user = result;
      res.locals.user = result;
      return next();
    })
    .catch(function(e){
      return console.log(e);
  })


  } else {
    return next()
  }
})


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/comments', commentRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
