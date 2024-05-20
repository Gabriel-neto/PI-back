const mongoose = require("mongoose");
const Fornecedor = require("../models/model_fornecedor");

async function validarDados(req, res, next) {
  const fornecedor = new Fornecedor(req.body);
  try {
    await fornecedor.validate();
    next();
  } catch (e) {
    res.status(422).json({ msg: "Dados do produto invalido." });
  }
}

module.exports = { validarDados };
