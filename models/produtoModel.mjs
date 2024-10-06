import { DataTypes } from 'sequelize';
import dbConnection from '../database/dbConnection.mjs';

const tbProduto = new dbConnection.define('Produto', {
  id: DataTypes.BIGINT,
  nomeProduto: DataTypes.STRING,
  preco: DataTypes.DECIMAL,
  descricao: DataTypes.STRING,
  imagem: DataTypes.STRING,
});

tbProduto.sync();

export default tbProduto;
