function entrar_na_minha_conta() {

    var senha = ipt_senha_login.value;
  
    var email = ipt_email_login.value;
  
    if (senha == "" || email == "") {

        alert("Preencha corretament os campos");
    
      } else if (!email.includes('@')) {

        alert("O email precisa ter @");

    } else {

      fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailServer: email,
        senhaServer: senha
    }),
    })
      .then((resposta) => {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
        resposta.json()
        .then(json => {
          console.log("json")
          console.log(json.lista)
          sessionStorage.ID_USUARIO = json.lista.id
          sessionStorage.EMAIL_USUARIO = json.lista.email
          if(json.lista.id == 1) {
              alert("Login realizado com sucesso! Redirecionando para Dashboard...");
              window.location = "./dashboard.html"
            } else {
              alert("Login realizado com sucesso! Redirecionando para tela de Quiz...");
              window.location = "./quiz.html";
            }
        })

        } else {
          throw "Você não possui uma conta ainda";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    }

    
}