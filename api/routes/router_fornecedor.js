const express = require('express');

const controllerFornecedor = require('../controllers/controller_fornecedor')

const router = express.Router();

router.post('/', controllerFornecedor.validarDados, controllerFornecedor.criarFornecedor)

router.get('/', controllerFornecedor.buscarFornecedores)
module.exports = router;