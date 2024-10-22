import { DataTypes } from 'sequelize';
import dbConnection from '../database/dbConnection.mjs';
import tbCategoria from './categoriaModel.mjs';
import tbGenero from './generoModel.mjs';

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
    id_categoria: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    tableName: 'produto',
    timestamps: false,
  },
);

tbProduto.belongsTo(tbCategoria, { foreignKey: 'id_categoria' });
tbCategoria.hasMany(tbProduto, { foreignKey: 'id_categoria' });

tbProduto.belongsTo(tbGenero, { foreignKey: 'id_genero' });
tbGenero.hasMany(tbGenero, { foreignKey: 'id_genero' });

// Exportando o modelo
export default tbProduto;
