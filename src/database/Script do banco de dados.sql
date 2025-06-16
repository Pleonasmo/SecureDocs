
-- BANCO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create database Entusiastas_da_historia;

use Entusiastas_da_historia;

-- TABELAS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create table Usuario (
	id int primary key auto_increment,
	nome varchar(60),
    apelido varchar(80),
	telefone char(13),
	email varchar(60) unique,
	senha varchar(80),
    periodo varchar(45)
);
        
create table Questao (
	id int primary key auto_increment,
    descricao varchar(90),
    resposta char(1));

create table Resposta (
	id int primary key auto_increment,
    pontuacao int,
    dataHora datetime,
    fkUsuario int,
    fkQuestao int,
    constraint usuarioTentativa foreign key (fkUsuario) references Usuario(id),
    constraint questaoTentativa foreign key (fkQuestao) references Questao(id)
    );

insert into questao (descricao, resposta) values ("O que marca o fim da Pré-História?", "D"),
	                                             ("Durante o Paleolítico, os humanos:", "C"),
	                                             ("Uma conquista crucial do período Paleolítico foi:", "B"),
	                                             ("A principal característica do Neolítico foi:", "C"),
	                                             ("A Idade dos Metais ficou marcada pela(o):", "A"),
	                                             ("A Idade Média começou com:", "C"),
	                                             ("O sistema social e econômico dominante na Idade Média era:", "D"),
                                                 ("No sistema feudal, os servos:", "C"),
                                                 ("O que caracterizou a Baixa Idade Média?", "C"),
                                                 ("A Peste Negra causou:", "B"),
                                                 ("Um dos marcos iniciais da Idade Moderna foi:", "D"),
                                                 ("O Renascimento destacou-se por valorizar:", "A"),
                                                 ("A Reforma Protestante foi iniciada por:", "D"),
                                                 ("O absolutismo é caracterizado pelo:", "C"),
                                                 ("O mercantilismo defendia:", "B"),
                                                 ("A Revolução Francesa foi motivada por:", "D"),
                                                 ("A Revolução Industrial teve início na:", "A"),
                                                 ("A Primeira Guerra Mundial terminou com:", "C"),
                                                 ("A Guerra Fria foi marcada por:", "D"),
                                                 ("A globalização é caracterizada por:", "A");

insert into usuario values (default, 'Julia', 'juju', '11987654321', 'juvisconti@sptech.school', 'Urubu#100', null);

select * from Usuario;

select * from Questao;

select * from Resposta;

create view graficoRespostas as (select
	sum(case when pontuacao = 1 and fkQuestao = 1 then 1 else 0 end) as acertoQ1,
    sum(case when pontuacao = 0 and fkQuestao = 1 then 1 else 0 end) as erroQ1, 
	sum(case when pontuacao = 1 and fkQuestao = 2 then 1 else 0 end) as acertoQ2,
    sum(case when pontuacao = 0 and fkQuestao = 2 then 1 else 0 end) as erroQ2, 
	sum(case when pontuacao = 1 and fkQuestao = 3 then 1 else 0 end) as acertoQ3,
    sum(case when pontuacao = 0 and fkQuestao = 3 then 1 else 0 end) as erroQ3, 
	sum(case when pontuacao = 1 and fkQuestao = 4 then 1 else 0 end) as acertoQ4,
    sum(case when pontuacao = 0 and fkQuestao = 4 then 1 else 0 end) as erroQ4, 
	sum(case when pontuacao = 1 and fkQuestao = 5 then 1 else 0 end) as acertoQ5,
    sum(case when pontuacao = 0 and fkQuestao = 5 then 1 else 0 end) as erroQ5, 
	sum(case when pontuacao = 1 and fkQuestao = 6 then 1 else 0 end) as acertoQ6,
    sum(case when pontuacao = 0 and fkQuestao = 6 then 1 else 0 end) as erroQ6, 
	sum(case when pontuacao = 1 and fkQuestao = 7 then 1 else 0 end) as acertoQ7,
    sum(case when pontuacao = 0 and fkQuestao = 7 then 1 else 0 end) as erroQ7, 
	sum(case when pontuacao = 1 and fkQuestao = 8 then 1 else 0 end) as acertoQ8,
    sum(case when pontuacao = 0 and fkQuestao = 8 then 1 else 0 end) as erroQ8, 
	sum(case when pontuacao = 1 and fkQuestao = 9 then 1 else 0 end) as acertoQ9,
    sum(case when pontuacao = 0 and fkQuestao = 9 then 1 else 0 end) as erroQ9, 
	sum(case when pontuacao = 1 and fkQuestao = 10 then 1 else 0 end) as acertoQ10,
    sum(case when pontuacao = 0 and fkQuestao = 10 then 1 else 0 end) as erroQ10, 
	sum(case when pontuacao = 1 and fkQuestao = 11 then 1 else 0 end) as acertoQ11,
    sum(case when pontuacao = 0 and fkQuestao = 11 then 1 else 0 end) as erroQ11, 
	sum(case when pontuacao = 1 and fkQuestao = 12 then 1 else 0 end) as acertoQ12,
    sum(case when pontuacao = 0 and fkQuestao = 12 then 1 else 0 end) as erroQ12, 
	sum(case when pontuacao = 1 and fkQuestao = 13 then 1 else 0 end) as acertoQ13,
    sum(case when pontuacao = 0 and fkQuestao = 13 then 1 else 0 end) as erroQ13, 
	sum(case when pontuacao = 1 and fkQuestao = 14 then 1 else 0 end) as acertoQ14,
    sum(case when pontuacao = 0 and fkQuestao = 14 then 1 else 0 end) as erroQ14, 
	sum(case when pontuacao = 1 and fkQuestao = 15 then 1 else 0 end) as acertoQ15,
    sum(case when pontuacao = 0 and fkQuestao = 15 then 1 else 0 end) as erroQ15, 
	sum(case when pontuacao = 1 and fkQuestao = 16 then 1 else 0 end) as acertoQ16,
    sum(case when pontuacao = 0 and fkQuestao = 16 then 1 else 0 end) as erroQ16, 
	sum(case when pontuacao = 1 and fkQuestao = 17 then 1 else 0 end) as acertoQ17,
    sum(case when pontuacao = 0 and fkQuestao = 17 then 1 else 0 end) as erroQ17, 
	sum(case when pontuacao = 1 and fkQuestao = 18 then 1 else 0 end) as acertoQ18,
    sum(case when pontuacao = 0 and fkQuestao = 18 then 1 else 0 end) as erroQ18, 
	sum(case when pontuacao = 1 and fkQuestao = 19 then 1 else 0 end) as acertoQ19,
    sum(case when pontuacao = 0 and fkQuestao = 19 then 1 else 0 end) as erroQ19, 
	sum(case when pontuacao = 1 and fkQuestao = 20 then 1 else 0 end) as acertoQ20,
    sum(case when pontuacao = 0 and fkQuestao = 20 then 1 else 0 end) as erroQ20
    from resposta);
    
    SELECT * FROM g
    raficoRespostas;
    
    select floor(COUNT(*) / 20) from Resposta;