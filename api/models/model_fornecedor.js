const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nome: {
    type: String,
    trim: true,
    uppercase: false,
    required: true,
  },
  empresa: {
    type: String,
    trim: true,
  },
  cnpj: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  telefone: {
    type: String,
    trim: true,
  },
  dataCadastro: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Fornecedor", schema);
