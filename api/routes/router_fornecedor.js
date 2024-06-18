const express = require("express");

const controllerFornecedor = require("../controllers/controller_fornecedor");
const validarToken = require('../middlewares/auth.js')
const router = express.Router();

router.post(
  "/",
  validarToken,
  controllerFornecedor.validarDados,
  controllerFornecedor.criarFornecedor
);

router.get("/",
  validarToken,
  controllerFornecedor.buscarFornecedores);

router.get(
  "/:id",
  validarToken,
  controllerFornecedor.buscarDadosFornecedor,
  controllerFornecedor.buscarFornecedor
);

router.put(
  "/:id",
  validarToken,
  controllerFornecedor.buscarDadosFornecedor,
  controllerFornecedor.validarDados,
  controllerFornecedor.atualizarFornecedor
);

router.delete(
  "/:id",
  validarToken,
  controllerFornecedor.buscarDadosFornecedor,
  controllerFornecedor.removerFornecedor
);

module.exports = router;
