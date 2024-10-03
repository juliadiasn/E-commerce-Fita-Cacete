import { Sequelize } from 'sequelize';
import 'dotenv/config';

const dbName = process.env.DB_NAME;
// const dbUser = 'root';
// const dbPass = 'root';
const dbUser = process.env.DB_USERNAME;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
// console.log(process.env);

const dbConnection = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  port: 3306,
  dialect: 'mysql',
});

async function testConnection() {
  try {
    await dbConnection.authenticate();
    console.log('Conectado ao DB: ', dbName);
  } catch (error) {
    console.error('Erro ao tentar conectar ao DB:', error);
  }
}

export default dbConnection;
export {testConnection}
