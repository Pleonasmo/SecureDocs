# SEJA BEM VINDO(A) AO PROJETO "ENTUSIASTAS DA HISTÓRIA"


Resumo: Neste arquivo está o passo para entender todo o backend e frontend utilizados na realização deste projeto...


-------------------------------------------------------------------------------------------------------------------------------------------------------------


# ORGANIZAÇÃO DAS PASTAS E ARQUIVOS AQUI:

As pastas que você vê á esquerda deste arquivo foram criadas para a organização do site. Elas funcionam se estiverem soltas, mas assim fica mais bonito, organizado e facilita a manipulação dos arquivos.

1. "node_modules" é uma pasta com todas as bibliotecas necessárias para que o Node.js rode.

        1. .byn;
        2. accepts;
        3. anymatch;
        4. etc.

2. "public" é a pasta que guarda os arquivos HTML, CSS e JS necessários para o projeto, ou seja, o nosso front-end.

        1. CSS: guarda os arquivos de estilização das páginas que aparecem pro usuário do site. Nós podemos colocar o conteúdo desse arquivo direto na página .html, mas assim é mais organizado.

            a. cadastro.css (código de estilização da página de cadastro no site);
            b. conteudo.css (código de estilização da página de conteúdo no site);
            c. dashboard.css (código de estilização da página de dashboard no site);
            d. index.css (código de estilização da página de home no site);
            e. login.css (código de estilização da página de login no site);
            f. quiz.css (código de estilização da página de quiz no site).
   
        2. IMAGENS: guarda todas as imagens utilizadas no site.

            a. estante_de_livros.png (imagem de fundo das páginas do site);
            b. grafico.png (imagem de gráfico dobre falta de educação de qualidade na home do site);
            c. icone_email.png (imagem de email no footer das páginas do site);
            d. icone_whatsapp.png (imagem de whatsapp no footer das páginas do site);
            e. linha_do_tempo.png (imagem da linha do tempo dos períodos históricos das páginas home e conteúdo);
            f. logoSemFundo.png (imagem da logo criada para o projeto e que aparece em todas as páginas do site).

        3. PAGINAS: guarda os arquivos .html. Esses arquivos contém código HTML, ou seja, são usados para representar a estrutura e o conteúdo de uma página web, como texto, imagens, links e outros elementos.

            a. cadastro.html (código de estrutura da página de cadastro);
            b. conteudo.html (código de estrutura da página de conteúdo);
            c. dashboard.html (código de estrutura da página de dashboard);
            d. login.html (código de estrutura da página de login);
            e. quiz.html (código de estrutura da página de quiz).

3. "src", ou source, é a pasta que guarda os arquivos do back-end.

        1. controllers: camada responsável por tratar e devolver a requisição;

        2. database: arquivos de configuração do banco;

        3. models: camada responsável por se comunicar com o banco;

        4. routes: camada responsável por definir as “rotas” até as controllers.

4. .env é um arquivo usado para armazenar variáveis de ambiente em aplicações e projetos de desenvolvimento. Ele é comumente usado para guardar informações sensíveis como chaves de API, credenciais de acesso a bancos de dados, e outras configurações que não devem ser diretamente codificadas no código-fonte.

5. .env.dev é outro arquivo usado para armazenar variáveis de ambiente em aplicações e projetos de desenvolvimento. Ele é comumente usado para guardar informações sensíveis como chaves de API, credenciais de acesso a bancos de dados, e outras configurações que não devem ser diretamente codificadas no código-fonte.

6. .gitignore é um arquivo de configuração que instrui o Git a ignorar certos arquivos e diretórios durante o versionamento, ou seja, para que o Git não os rastreie.

7. app.js é o arquivo de configuração da aplicação. Ele desempenha um papel fundamental no desenvolvimento de aplicações web e é frequentemente usado tanto no lado do cliente (front-end) quanto no lado do servidor (back-end).

8. LICENSE é o arquivo que especifica os termos de uso de um software ou código aberto. Ele geralmente contém informações sobre a licença, como o nome da licença, os direitos e restrições de uso, e informações sobre o proprietário do código. 

9. package-lock.json é um arquivo gerado automaticamente pelo gerenciador de pacotes Node.js (npm) que registra as versões exatas das dependências de um projeto, garantindo que a instalação do projeto em diferentes ambientes seja consistente.

10. package.json  é um arquivo crucial em projetos Node.js e JavaScript moderno, que funciona como um manifesto do seu projeto. Ele contém informações sobre o projeto, suas dependências, scripts de build e muito mais, permitindo que ferramentas como o npm e outras gerenciem e automatizem tarefas.

11. README.md é este arquivo que você está lendo agora.


-------------------------------------------------------------------------------------------------------------------------------------------------------------


# FLUXO DO WEB-DATA-VIZ

1. Página (cliente preenche dados, JavaScript cria a requisição e envia os dados para o endpoint);

2. Controller (recebe requisição, faz o tratamento nos dados e envia ao model);

3. Model (recebe os dados, processa no banco e retorna o resultado);

4. Controller (recebe o resultado da model e retorna os dados com o status HTTP correto);

5. Página (recebe os dados e atualiza a tela do cliente por meio do JavaScript).


-------------------------------------------------------------------------------------------------------------------------------------------------------------


# COMO RODAR O SITE:

1. Abre essa pasta no VSCode;

2. Abre o terminal nesta pasta;

3. Escreve "npm i" para instalar todas as dependências que o node usa;

4. Escreve "npm start" para a API rodar;

5. Vai pro site testar.


-------------------------------------------------------------------------------------------------------------------------------------------------------------


1SIS - Julia Visconti - 04242033