var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/SalaController");

router.post("/cadastrarSala", function (req, res) {
    SalaController.cadastrarSala(req, res);
})
module.exports = router;