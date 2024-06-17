const express = require('express');

const controllerCompras = require('../controllers/controller_compras');
const validarToken = require('../middlewares/auth')

const router = express.Router()

router.post('/', validarToken, controllerCompras.validarDados, controllerCompras.criar);

router.get('/', validarToken, controllerCompras.obterTodas);

router.get('/:id', validarToken, controllerCompras.buscarPeloId, controllerCompras.obter);

router.put('/:id', validarToken, controllerCompras.buscarPeloId, controllerCompras.validarDados, controllerCompras.atualizar);

router.delete('/:id', validarToken, controllerCompras.buscarPeloId, controllerCompras.remover)


module.exports = router;