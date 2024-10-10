import { DataTypes } from 'sequelize';
import dbConnection from '../database/dbConnection.mjs';

const tbProduto = dbConnection.define(
  'Produto',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_produto: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    preco_produto: {  
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    imagem_produto: {  
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'produto',
    timestamps: false,
  },
);

export default tbProduto;
