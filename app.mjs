import express from 'express';
import { testConnection } from './config/dbConnection.mjs';

const app = express();
app.use(express.static('./public/views'));

//DATABASE
testConnection();

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
