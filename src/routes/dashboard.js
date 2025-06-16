var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/totalUsuarioSite", function (req, res) {
    dashboardController.totalUsuarioSite(req, res);
})

router.post("/submeterResposta", function (req, res) {
    dashboardController.submeterResposta(req, res)
})

router.get("/mediaAcertos", function (req, res) {
    dashboardController.mediaAcertos(req, res)
})

router.get("/mediaErros", function (req, res) {
    dashboardController.mediaErros(req, res)
})

router.get("/carregarRanking", function (req, res) {
    dashboardController.carregarRanking(req, res)
})

router.get("/graficoRespostas", function (req, res) {
    dashboardController.graficoRespostas(req, res)
})

router.get("/kpiQtdTentativas", function (req, res) {
    dashboardController.kpiQtdTentativas(req, res)  
})

module.exports = router;