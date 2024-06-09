const mongoose = require('mongoose')
const Compra = require('../models/model_compras')

const criar = async (req, res) => {
  const compra = await Compra.create(req.body)
  res.status(201).json(compra)
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
  if (req.produto && req.preco){
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



module.exports = { criar, obterTodas, obter, buscarPeloId, atualizar, remover };