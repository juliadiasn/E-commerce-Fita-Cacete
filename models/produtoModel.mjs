import { DataTypes } from 'sequelize';
import dbConnection from '../database/dbConnection.mjs';

// Definir o modelo de Produto
const Produto = dbConnection.define(
  'Produto',
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: 'produtos', // Nome da tabela no banco
  },
);

module.exports = Produto;
