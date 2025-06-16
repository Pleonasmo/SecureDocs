// CONTROLLER: Atua como intermediário entre o Model e a View. Recebe as interações do usuário (por exemplo, um clique em um botão) e interage com o Model para realizar ações. Retorna os dados processados pelo Model para a View, que os exibe ao usuário. 


// essa constante está importando o módulo dashboardModel.js que está localizado na pasta models:

    const gerenteModel = require("../models/dashboardModel");

// essa função responde a uma requisição HTTP com o número total de usuários do site: ???????

    function totalUsuarioSite(req, res) {

        gerenteModel.totalUsuarioSite()
        
            .then((resultado) => {
            
                res.json({
            
                    lista: resultado
            
                })
            
            })
            
            .catch((erro) => {
            
                console.error("Erro na captura da kpi de total :", erro);
            
                res.status(500).json(erro.sqlMessage);
            
            });
    
        }

// essa função exibe os dados do corpo da requisição (idQuestao, pontuacao, idUsuario), chama gerenteModel.submeterResposta(...), que deve executar uma INSERT no banco, retorna o resultado no formato { lista: resultado }. e trata erros, retornando um status 500 com a mensagem de erro SQL

    function submeterResposta(req, res) {
    
        let idQuestao = req.body.idQuestaoServer;
    
        let pontuacao = req.body.pontuacaoServer;
    
        let idUsuario = req.body.idUsuarioServer;

        gerenteModel.submeterResposta(idQuestao, pontuacao, idUsuario)
            
        .then((resultado) => {
        
            res.json({
        
                lista: resultado
        
            })
        
        })
        
        .catch((erro) => {
        
            console.error("Erro na captura da kpi de total :", erro);
        
            res.status(500).json(erro.sqlMessage);
        
        });

    }

// essa função 

    function mediaAcertos(req, res) {

        gerenteModel.mediaAcertos()
            
            .then((resultado) => {
            
                res.json({
            
                    lista: resultado
            
                })
        
            })
        
            .catch((erro) => {
        
                console.error("Erro na captura da kpi de total :", erro);
        
                res.status(500).json(erro.sqlMessage);
        
            });

        }

// essa função

    function mediaErros(req, res) {

        gerenteModel.mediaErros()
            
            .then((resultado) => {
            
                res.json({
            
                    lista: resultado
            
                })
        
            })

        .catch((erro) => {
        
            console.error("Erro na captura da kpi de total :", erro);
        
            res.status(500).json(erro.sqlMessage);
        
        });

    }

// essa função

    function carregarRanking(req, res) {

    gerenteModel.carregarRanking()
        
        .then((resultado) => {
        
            res.json({
        
                lista: resultado
        
            })
        
        })
        
        .catch((erro) => {
        
            console.error("Erro na captura da kpi de total :", erro);
        
            res.status(500).json(erro.sqlMessage);
        
        });

    }

// essa função

    function graficoRespostas(req, res) {

        gerenteModel.graficoRespostas()
        
            .then((resultado) => {
            
                res.json({
            
                    lista: resultado
            
                })
        
            })
        
            .catch((erro) => {
        
                console.error("Erro na captura da kpi de total :", erro);
        
                res.status(500).json(erro.sqlMessage);
        
            });

    }


    function kpiQtdTentativas(req, res) {
        gerenteModel.kpiQtdTentativas().then(data => {
            console.log(data)
            return res.status(200).json(data);
        })
        .catch(error => {
            console.error("Erro ao consultar dados de tentativas", error);

            return res.status(500).json(error.sqlMessage);
        })
    }

// 

module.exports = {
    totalUsuarioSite,
    submeterResposta,
    mediaAcertos,
    mediaErros,
    carregarRanking,
    graficoRespostas,
    kpiQtdTentativas
}