const Produto = require("../models/model_produto");
const mongoose = require("mongoose");

async function validarDados(req, res, next) {
  const produto = new Produto(req.body);
  try {
    await produto.validate();
    next();
  } catch (err) {
    res.status(422).json({ msg: "Dados do produto invalido" });
  }
}

async function criar(req, res) {
  const produto = await Produto.create(req.body);
  res.status(201).json(produto);
}

async function obterTodosProdutos(req, res) {
  const produtos = await Produto.find({});
  res.json(produtos);
}

module.exports = { criar, validarDados, obterTodosProdutos };
