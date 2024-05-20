const mongoose = require("mongoose");
const Fornecedor = require("../models/model_fornecedor");

/**
 * Middleware para validar o body da requisição.
 */
const validarDados = async (req, res, next) => {
  const fornecedor = new Fornecedor(req.body);
  try {
    await fornecedor.validate();
    next();
  } catch (e) {
    res.status(422).json({ msg: "Dados do fornecedor invalido." });
  }
};

/**
 * Middleware para validar se o ID da requisição é valido.
 */
const buscarDadosFornecedor = async (req, res, next) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const fornecedor = await Fornecedor.findById(id);
    if (fornecedor) {
      next();
    } else {
      res.status(404).json({ msg: "Fornecedor não encontrado." });
    }
  } catch (e) {
    res.status(400).json({ msg: "ID invalido." });
  }
};

/**
 * Função para criar um fornecedor.
 */
const criarFornecedor = async (req, res) => {
  const fornecedor = await Fornecedor.create(req.body);
  res.status(201).json(fornecedor);
};

/**
 * Função para retornar uma lista de fornecedores.
 */
const buscarFornecedores = async (req, res) => {
  const fornecedores = await Fornecedor.find({});
  res.json(fornecedores);
};

/**
 * Função para buscar um fornecedor com base no ID.
 */
const buscarFornecedor = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const fornecedor = await Fornecedor.findById(id);
  res.json(fornecedor);
};

/**
 * Função para atualizar um fornecedor com base no ID.
 */
const atualizarFornecedor = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const fornecedor = await Fornecedor.findOneAndUpdate({ _id: id }, req.body);
  res.json(fornecedor);
};

/**
 * Função para deletar um fornecedor com base no ID.
 */
const removerFornecedor = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  await Fornecedor.findByIdAndDelete(id);
  res.status(204).end();
};

module.exports = {
  validarDados,
  criarFornecedor,
  buscarFornecedores,
  buscarDadosFornecedor,
  buscarFornecedor,
  atualizarFornecedor,
  removerFornecedor,
};
