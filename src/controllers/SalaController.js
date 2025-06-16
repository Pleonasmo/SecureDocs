var usuarioModel = require("../models/SalaModel");

function cadastrarSala(req, res) {
    var nome = req.body.nomeServer;
    var tamanho = req.body.tamanhoServer;
    

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (tamanho == undefined) {
        res.status(400).send("Seu telefone está undefined");
    } else {

        SalaModel.cadastrarSala(nome,tamanho)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    cadastrarSala
}