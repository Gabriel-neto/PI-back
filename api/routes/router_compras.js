const express = require('express');

const controllerCompras = require('../controllers/controller_compras');

const router = express.Router()

router.post('/', controllerCompras.validarDados, controllerCompras.criar);

router.get('/',controllerCompras.obterTodas);

router.get('/:id', controllerCompras.buscarPeloId, controllerCompras.obter);

router.put('/:id', controllerCompras.buscarPeloId, controllerCompras.atualizar);

router.delete('/:id', controllerCompras.buscarPeloId, controllerCompras.remover)


module.exports = router;