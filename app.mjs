import dbConnection from './database/dbConnection.mjs';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
//routes
import routerUser from './routes/userRouter.mjs';
import routerProduto from './routes/produtoRouter.mjs';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS Handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With, Content-Type, Accept, Authorization',
  );

  if (req.method == 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json();
  }
  next();
});

dbConnection
  .sync()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });

//routes
app.use('/api/users', routerUser);
app.use('/api/produtos', routerProduto
)
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
app.use(express.static('./public/images/produtos/vhs'));
app.use(express.static('./public/images/produtos/'));

app.listen(process.env.PORT, () => {
  console.log('Servidor iniciado na porta: ', process.env.PORT);
});
