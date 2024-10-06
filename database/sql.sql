drop database if exists fitascacete;
create database fitascacete;
use fitascacete;

CREATE TABLE produto (
    id SERIAL PRIMARY KEY,
    nome_produto VARCHAR(255) NOT NULL,
    descricao VARCHAR(2000) NOT NULL,
    preco_produto DECIMAL(10 , 2 ) NOT NULL,
    imagem_produto VARCHAR(255)
);







