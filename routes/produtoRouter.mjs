import { listarProduto } from "../controllers/produtoController.mjs";
import { Router } from "express";

const routerProduto = Router()

routerProduto.get('/listar', listarProduto)

export default routerProduto;