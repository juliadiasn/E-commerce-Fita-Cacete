import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';



// Carregar variáveis de ambiente do arquivo .env
dotenv.config();
const dbConnection = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: 'mysql',
    logging: false, // Desativa logs das queries no console
  },
);

// Função para testar a conexão
const testConnection = async () => {
  try {
    await dbConnection.authenticate();
    console.log('Conectado ao banco de dados MySQL no Railway com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

testConnection();

export default dbConnection;
export {testConnection};
