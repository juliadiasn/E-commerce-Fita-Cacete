import { getProdutosCategoria, listarProduto, getProdutosGeneros } from "../controllers/produtoController.mjs";
import { Router } from "express";

const routerProduto = Router()

routerProduto.get('/listar', listarProduto)
routerProduto.get('/categoria/:categoriaId', getProdutosCategoria)
routerProduto.get('/genero/:generoId', getProdutosGeneros)

export default routerProduto;