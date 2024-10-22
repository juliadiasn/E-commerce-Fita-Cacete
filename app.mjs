import dbConnection from './database/dbConnection.mjs';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();
//routes
import routerUser from './routes/userRouter.mjs';
import routerProduto from './routes/produtoRouter.mjs';

const app = express();

//Middleware para o CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

//Middleware para o cookie-parser
app.use(cookieParser());

//Middleware para o body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

dbConnection
  .sync()
  .then(result => {
    console.log('Sucesso - BD CONECTADO');
    // console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

//routes
app.use('/api/users', routerUser);
app.use('/api/produtos', routerProduto);
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//static
app.use(express.static('./public/views'));
app.use(express.static('./public/images'));

app.listen(process.env.PORT, () => {
  console.log('Servidor iniciado na porta: ', process.env.PORT);
});
