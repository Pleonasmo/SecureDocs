
-- BANCO -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create database SecureDocs;

use SecureDocs;

-- TABELAS -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

create table Empresa ( id int primary key auto_increment,
                       razao_social varchar(50),
	                   cnpj char(14),
					   codigo_ativacao varchar(50) );


create table Usuario ( id int primary key auto_increment,
	                   nome varchar(60),
                       apelido varchar(80),
					   telefone char(13),
					   email varchar(60) unique,
					   senha varchar(80),
                       fk_Empresa int,
	                   foreign key (fk_Empresa) references Empresa(id) );


create table Sala ( id int primary key auto_increment,
                    nomeSala varchar(50),
	                tamanho varchar(300),
					fk_Empresa int,
					foreign key (fk_Empresa) references Empresa(id) );


create table Medida ( id int primary key auto_increment,
                      dht11_umidade decimal,
                      dht11_temperatura decimal,
                      momento datetime,
                      fk_Sala int,
					  foreign key (fk_Sala) references Sala(id) );


insert into Empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');

insert into Empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');

insert into Sala (nomeSala, tamanho, fk_empresa) values ('4B', 'Pequena', 1);

insert into Sala (nomeSala, tamanho, fk_empresa) values ('5A', 'Média', 2);