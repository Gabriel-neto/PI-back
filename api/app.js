
require('dotenv').config()
const mongoose = require('mongoose')
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const routerApidocs = require('./routes/router_apidocs');
const routerFornecedor = require("./routes/router_fornecedor")
const routerProdutos = require("../api/routes/router_produto");
const routerCompras = require("../api/routes/router_compras");
const usersRouter = require("./routes/users")

var app = express();

mongoose.connect(process.env.MONGODB_URL)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api-docs", routerApidocs);

app.use("/produtos", routerProdutos);
app.use('/compras', routerCompras);
app.use('/fornecedor', routerFornecedor)
app.use('/users', usersRouter);

module.exports = app;