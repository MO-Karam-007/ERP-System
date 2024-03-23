require('dotenv').config()
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var morgan = require('morgan')
var indexRouter = require('./routes/index');
var MyApiError = require('./utils/ApiErrorHandler')
var app = express();
var { errorHandeler } = require('./utils/HandleResponse')




app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "development")
{
    app.use(morgan('env'))
    console.log(`Mode : ${process.env.NODE_ENV}`);
}
app.use('/hr', indexRouter)

// app.use(handleResponse)

app.all('*', (req, res, next) =>
{
    next(new MyApiError(`Can\'t find this route ${req.originalUrl}`, 404))
})

app.use(errorHandeler)


module.exports = app
