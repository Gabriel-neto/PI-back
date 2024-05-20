const express = require('express');

const controllerFornecedor = require('../controllers/controller_fornecedor')

const router = express.Router();

router.post('/', controllerFornecedor.validarDados, controllerFornecedor.criarFornecedor)

router.get('/', controllerFornecedor.buscarFornecedores)

router.get('/:id', controllerFornecedor.buscarDadosFornecedor, controllerFornecedor.buscarFornecedor)

module.exports = router;