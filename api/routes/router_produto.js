const express = require("express");

const controllerProdutos = require("../controllers/controller_produto");
const validarToken = require("../middlewares/auth");

const router = express.Router();

router.post(
  "/",
  validarToken,
  controllerProdutos.validarDados,
  controllerProdutos.criar
);
router.get("/", controllerProdutos.obterTodosProdutos);
router.get(
  "/:id",
  validarToken,
  controllerProdutos.obterDadosProdutos,
  controllerProdutos.obterProduto
);
router.put(
  "/:id",
  validarToken,
  controllerProdutos.obterDadosProdutos,
  controllerProdutos.validarDados,
  controllerProdutos.editarProduto
);
router.delete(
  "/:id",
  validarToken,
  controllerProdutos.obterDadosProdutos,
  controllerProdutos.excluiProduto
);

module.exports = router;
