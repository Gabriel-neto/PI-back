const express = require("express");

const controllerProdutos = require("../controllers/controller_produto");

const router = express.Router();

router.post("/", controllerProdutos.criar);

module.exports = router;
