import dbConnection from '../database/dbConnection.mjs';
import { DataTypes } from 'sequelize';

const tbGenero = dbConnection.define(
  'Genero',
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
  },
  {
    tableName: 'genero',
    timestamps: false,
  },
);

export default tbGenero;
