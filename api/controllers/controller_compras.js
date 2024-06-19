const mongoose = require('mongoose')
const Compra = require('../models/model_compras')

const validarDados = async (req, res, next) => {
  const produto = new Compra(req.body);
  try {
      await produto.validate();
      next();
  } catch (err) {
      res.status(422).json({ msg: 'Dados do produto invalidos' });
  };

};

const criar = async (req, res) => {
  try {
    const compra = await Compra.create(req.body);
    res.status(201).json(compra);
} catch (error) {
    console.log(error)
    if (error.name === 'ValidationError') {
        res.status(422).json({ msg: 'dados invalidos', errors: error.errors });
    } else {
        res.status(500).json({ msg: 'Erro no servidor', error: error.message });
    }
}
}

const obterTodas = async (req, res) => {
  const compras = await Compra.find({});
  res.json(compras);
};

const buscarPeloId = async (req, res, next) => {
  try {
      const id = new mongoose.Types.ObjectId(req.params.id)
      const compra = await Compra.findOne({ _id: id });
      if (compra) {
          next();
      } else {
          res.status(404).json({ msg: 'Compra não encontrada!' })
      }
  } catch (error) {
      res.status(400).json({ msg: 'id inválido!' });
  }
}

const obter = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const compra = await Compra.findOne({ _id: id });
  res.status(200).json(compra);
};

const atualizar = async (req, res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  const compra = await Compra.findByIdAndUpdate({_id: id}, req.body);
  if (compra){
    res.status(200).json(compra);
  } else {
    res.status(422).json({msg: "dados invalidos"})
  }
};

const remover = async (req,res) => {
  const id = new mongoose.Types.ObjectId(req.params.id);
  await Compra.findByIdAndDelete({_id: id});
  res.status(204).end();
};



module.exports = { validarDados, criar, obterTodas, obter, buscarPeloId, atualizar, remover };