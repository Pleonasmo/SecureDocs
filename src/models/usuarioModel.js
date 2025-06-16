// MODEL: responsável lógica da aplicação, como a manipulação de dados, regras de negócio e interação com o banco de dados. Não está diretamente envolvido na apresentação dos dados ao usuário. 


// essa constante está importando um módulo localizado no caminho relativo ../database/config. Esse módulo contém as configurações e funções para conectar ao banco de dados:

    const database = require("../database/config")

// essa função está inserindo os dados de cadastro no meu banco de dados:

    function cadastrar(codigo, nome, email, apelido, telefone, senha) {
    
        var instrucaoSql = `INSERT INTO Usuario (nome, apelido, telefone, email, senha, codigo_empresa) VALUES ('${nome}', '${email}', '${apelido}', '${telefone}', '${senha}', '${codigo}');`;
        
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    
        return database.executar(instrucaoSql);
    
    }

// essa função está fazendo a verificação do login para ver se a conta inserida pelo usuário já existe:

    function autenticar(email, senha) {
        
        var instrucaoSql = `SELECT * FROM Usuario WHERE email = '${email}' AND senha = '${senha}';`;

        console.log(instrucaoSql);
    
        return database.executar(instrucaoSql);
    
    }

// esse json exporta as funções que fui definindo acima nesse arquivo para serem usadas em outros arquivos do projeto:

    module.exports = {
        cadastrar,
        autenticar
    };