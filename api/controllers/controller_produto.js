const Produto = require("../models/model_produto");
const mongoose = require("mongoose");

async function criar(req, res) {
  const produto = await Produto.create(req.body);
  res.status(201).json(produto);
}

module.exports = { criar };
