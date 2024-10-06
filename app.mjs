import express from 'express';
import { testConnection } from './database/dbConnection.mjs';

const app = express();
app.use(express.static('./public/views'));
app.use(express.static('./public/images'));

//DATABASE
testConnection();

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
