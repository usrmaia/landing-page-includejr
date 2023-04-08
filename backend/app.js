var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var budgetFormRouter = require('./routes/budget-form')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: ['http://localhost:3000']
}));
//app.use(cors());

//app.use('/api', indexRouter);
//app.use('/api/users', usersRouter);
app.use('/api/form', budgetFormRouter);

module.exports = app;
