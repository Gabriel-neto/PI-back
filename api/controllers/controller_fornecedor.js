const mongoose = require("mongoose");
const Fornecedor = require("../models/model_fornecedor");

/**
 * Middleware para validar os dados do fornecedor.
 */
const validarDados = async (req, res, next) => {
  const fornecedor = new Fornecedor(req.body);
  try {
    await fornecedor.validate();
    next();
  } catch (e) {
    res.status(422).json({ msg: "Dados do produto invalido." });
  }
};

const criarFornecedor = async (req, res) => {
  const fornecedor = await Fornecedor.create(req.body);
  res.status(201).json(fornecedor);
};

module.exports = {
  validarDados,
  criarFornecedor,
};
