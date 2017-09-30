'use strict'
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var Event=require('./models/eventModel');

var index = require('./routes/index');
var users = require('./routes/users');

//creating connection to Database
var db;

if(process.env.ENV=='Test')//create db for test
    db= mongoose.connect('mongodb://localhost/eventAPI_test',{
    useMongoClient: true
});

else
{
    db= mongoose.connect('mongodb://localhost/eventAPI',{
        useMongoClient: true
    });
}

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var app = express();

var port= process.env.PORT || 3000;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


var routes=require('./routes/eRoute');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
    console.log(req);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function () {
    console.log('Gulp is Running my app on PORT:' +port);
});


module.exports = app;
