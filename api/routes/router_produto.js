const express = require("express");

const controllerProdutos = require("../controllers/controller_produto");

const router = express.Router();

router.post("/", controllerProdutos.validarDados, controllerProdutos.criar);
router.get("/", controllerProdutos.obterTodos);

module.exports = router;
