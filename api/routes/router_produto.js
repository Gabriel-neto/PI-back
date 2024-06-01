const express = require("express");

const controllerProdutos = require("../controllers/controller_produto");

const router = express.Router();

router.post("/", controllerProdutos.validarDados, controllerProdutos.criar);
router.get("/", controllerProdutos.obterTodosProdutos);
router.get("/:id", controllerProdutos.obterDadosProdutos, controllerProdutos.obterProduto);
router.put("/:id", controllerProdutos.obterDadosProdutos, controllerProdutos.validarDados, controllerProdutos.editarProduto);

module.exports = router;
