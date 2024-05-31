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

const obterDadosProdutos = async (req, res, next) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const produto = await Produto.findById(id);
    if (produto) {
      next();
    } else {
      res.status(404).json({ msg: "Produto nao encontrado." });
    }
  } catch (e) {
    res.status(400).json({ msg: "ID invalido." });
  }
};

async function criar(req, res) {
  const produto = await Produto.create(req.body);
  res.status(201).json(produto);
}

async function obterTodosProdutos(req, res) {
  const produtos = await Produto.find({});
  res.json(produtos);
}

const obterProduto = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const produto = await Produto.findById(id);
  res.json(produto);
};

module.exports = { criar, validarDados, obterTodosProdutos, obterProduto, obterDadosProdutos };