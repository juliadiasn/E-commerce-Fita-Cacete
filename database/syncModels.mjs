import dbConnection from './dbConnection.mjs';
import Produto from '../models/produtoModel.mjs';

(async () => {
  try {
    await dbConnection.sync();
    console.log('Tabelas sincronizadas com sucesso!');
  } catch (error) {
    console.log('Erro ao sincronizar tabelas: ', error);
  }
})();
