import tbProduto from '../models/produtoModel.mjs';

async function listarProduto(req, res) {
  try {
    const todosProdutos = await tbProduto.findAll();
    res.json(todosProdutos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os produtos', error });
  }
}

export { listarProduto };
