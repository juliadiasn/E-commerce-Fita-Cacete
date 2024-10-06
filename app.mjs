import express from 'express';


const app = express();
app.use(express.static('./public/views'));
app.use(express.static('./public/images'));

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
