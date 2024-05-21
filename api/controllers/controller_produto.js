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

module.exports = { criar, validarDados };
