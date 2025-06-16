
    const database = require("../database/config")
// essa função está inserindo os dados de cadastro no meu banco de dados:
    function cadastrarSala(nome, telefone) {
        var instrucaoSql = `INSERT INTO Sala (nome, telefone) VALUES ('${nome}','${telefone}');`;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql)
    }
    module.exports = {
        cadastrarSala,
    };