// MODEL: responsável lógica da aplicação, como a manipulação de dados, regras de negócio e interação com o banco de dados. Não está diretamente envolvido na apresentação dos dados ao usuário. 


// essa constante está importando um módulo localizado no caminho relativo ../database/config. Esse módulo contém as configurações e funções para conectar ao banco de dados:

    const database = require("../database/config");

// essa função é a KPI do total de usuários no site?

    function totalUsuarioSite() {

        let instrucaoSql = `SELECT COUNT(*) AS qtd FROM Usuario;`

        return database.executar(instrucaoSql);

    }

// essa função está inserindo os dados de resposta do quiz na tabela "resposta" do meu banco de dados:

    function submeterResposta(idQuestao, pontuacao, idUsuario) {

        let instrucaoSql = `INSERT INTO Resposta (pontuacao, dataHora, fkQuestao, fkUsuario) VALUES (${pontuacao}, now(), ${idQuestao}, ${idUsuario});`;

        return database.executar(instrucaoSql);

    }

// essa função é a minha KPI de taxa de acertos?

    function mediaAcertos() {

        let instrucaoSql = `SELECT ROUND((SUM(pontuacao) / COUNT(*)) * 100, 1) AS taxa FROM Resposta;`;

        return database.executar(instrucaoSql);

    }

// essa função é a minha KPI de taxa de erros?

    function mediaErros() {

        let instrucaoSql = `SELECT ROUND((SUM(CASE WHEN pontuacao = 0 THEN 1 ELSE 0 END) / COUNT(*)) * 100, 1) AS taxa FROM Resposta;`;

        return database.executar(instrucaoSql);

    }

// essa função conta quantos usuários escolheram cada período histórico da minha tabela "usuario" (votaram junto com o cadastro):

    function carregarRanking() {

        let instrucaoSql = `SELECT SUM(CASE WHEN periodo = "Pré-História" THEN 1 ELSE 0 END) AS qtdPreHistoria,
	    	                       SUM(CASE WHEN periodo = "Idade Antiga" THEN 1 ELSE 0 END) AS qtdIdadeAntiga,
		                           SUM(CASE WHEN periodo = "Idade Média" THEN 1 ELSE 0 END) AS qtdIdadeMedia,
		                           SUM(CASE WHEN periodo = "Idade Moderna" THEN 1 ELSE 0 END) AS qtdIdadeModerna,
		                           SUM(CASE WHEN periodo = "Idade Contemporânea" THEN 1 ELSE 0 END) AS qtdIdadeContemporanea FROM Usuario;`;

        return database.executar(instrucaoSql);
    
    }

// essa função busca todos os dados da minha view enorme "graficoRespostas":

    function graficoRespostas() {

        let instrucaoSql = `SELECT * FROM graficoRespostas;`;

        return database.executar(instrucaoSql)
    }


    function kpiQtdTentativas () {
        let sql = `select floor(COUNT(*) / 20) as qtd from Resposta;`

        return database.executar(sql);
    }

// esse json exporta as funções que fui definindo acima nesse arquivo para serem usadas em outros arquivos do projeto:

    module.exports = {
        totalUsuarioSite,
        submeterResposta,
        mediaAcertos,
        mediaErros,
        carregarRanking,
        graficoRespostas,
        kpiQtdTentativas
    }