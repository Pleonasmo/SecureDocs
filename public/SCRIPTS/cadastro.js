function criar_minha_conta() {

    var codigo = ipt_codigo_ativacao.value;

    var nome = nome_usuario_cadastro.value;
  
    var apelido = nome_apelido_cadastro.value;
  
    var telefone = telefone_usuario_cadastro.value;
  
    var email = ipt_email_cadastro.value;
  
    var senha = ipt_senha_cadastro.value;
  
    var confirmaSenha = ipt_confirmacao_senha_cadastro.value;

    


    if (nome == "" || email == "" || apelido == "" || confirmaSenha == "" || senha == "" || telefone == "") {

       alert("Você precisa preencher todos os campos!");
          
    } else if (senha != confirmaSenha) {
    
      alert("Senhas estão diferentes.");
        
    } else if (nome.length < 3 || apelido.length < 3) {

      alert("O nome deve ter pelo menos 3 letras.");

    } else if (!email.includes('@')) {

      alert("O email precisa ter @");
        
    } else if (!telefone.length == 13){

      alert('O telefone precisa ter 13 dígitos (sem espaços ou sinais além dos números.');

    } else {

      fetch("/usuarios/cadastrar", {
  
      method: "POST",
  
      headers: {
  
        "Content-Type": "application/json",
  
      },
  
      body: JSON.stringify({
  
        nomeServer: nome,
  
        apelidoServer: apelido,
  
        telefoneServer: telefone,
  
        emailServer: email,
  
        senhaServer: senha,

        codigoServer: codigo
  
      }),
  
    })
  
    .then(function (resposta) {
  
      console.log("resposta: ", resposta);

      if (resposta.ok) {

        alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

        window.location = "./login.html";

      } else {

        throw "Houve um erro ao tentar realizar o cadastro!";

      }

    })

    .catch(function (resposta) {

      console.log(`#ERRO: ${resposta}`);

    });

    }

}