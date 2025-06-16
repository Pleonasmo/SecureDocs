
    const database = require("../database/config")
// essa função está inserindo os dados de cadastro no meu banco de dados:
    function cadastrarSala(nome, tamanho) {
        var instrucaoSql = `INSERT INTO Sala (nomeSala, telefone) VALUES ('${nome}','${tamanho}');`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql)
    }
    module.exports = {
        cadastrarSala,
    };