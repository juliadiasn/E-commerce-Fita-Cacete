import { DataTypes } from 'sequelize';
import dbConnection from '../database/dbConnection.mjs';

const tbUser = dbConnection.define(
  'User',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'user',
    timestamps: false,
  },
);


export default tbUser;
