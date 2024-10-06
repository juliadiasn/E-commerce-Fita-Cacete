import tbProduto from '../models/produtoModel.mjs';

async function listarProduto(req, res) {
  const todosProdutos = await tbProduto.findAll();
  res.json(todosProdutos);
}
