import { DataTypes } from 'sequelize';
import dbConnection from '../database/dbConnection.mjs';

const tbCategoria = dbConnection.define(
  'Categoria',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome_categoria: {
      type: DataTypes.STRING,
    },
  },
  { tablename: 'categoria', timestamps: false },
);

export default tbCategoria;
