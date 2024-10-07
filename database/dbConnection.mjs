import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const dbConnection = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql',
  },
);

// Função para testar a conexão
const testConnection = async () => {
  try {
    await dbConnection.authenticate();
    console.log('Conectado ao banco de dados MySQL - Fitas com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

testConnection();

export default dbConnection;
export { testConnection };
