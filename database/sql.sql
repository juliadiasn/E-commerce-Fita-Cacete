drop database if exists fitascacete;
create database fitascacete;
use fitascacete;

CREATE TABLE categoria (
    id SERIAL PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL
);

CREATE TABLE genero (
    id SERIAL PRIMARY KEY,
    nome_genero VARCHAR(255) NOT NULL
);


CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    descricao VARCHAR(2000) NOT NULL,
    preco_produto DECIMAL(10 , 2 ) NOT NULL,
    imagem_produto VARCHAR(255),
    id_categoria BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_categoria)
        REFERENCES categoria (id),
    id_genero BIGINT UNSIGNED NOT NULL,
    FOREIGN KEY (id_genero)
        REFERENCES genero (id)
);

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

DELETE FROM user;

insert into user values (1, "julia","admin", "admmin");

insert into categoria values 
(1, 'VHS'),
(2, 'CASSETE');
insert into genero values 
(1, 'Novidades'),
(2, 'Cinema'),
(3, 'Música'), 
(4, 'Famosos'),
(5, 'Históricos'),
(6, 'Raros');



insert into produto values (2, 'Fita VHS - TESTE', 'Bem bacana e antiga', 20.00, '/vhs/produto1.png', 1, 3);
insert into produto values (3, 'Fita K7 - TESTE', 'Bem colorida e diferente', 100.00, '/cassete/produto1.png', 2, 4);
insert into produto values (4, 'Fita K7 - TESTE2', 'Bem colorida e diferente', 100.00, '/cassete/produto1.png', 2, 6);
insert into produto values (5, 'Fita VHS - TESTE2', 'Bem estranha?', 100.00, '/vhs/produto2.png', 1, 5);