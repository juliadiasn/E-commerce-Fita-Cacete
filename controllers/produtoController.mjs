import tbProduto from '../models/produtoModel.mjs';
import tbCategoria from '../models/categoriaModel.mjs';
import tbGenero from '../models/generoModel.mjs';

// Função para listar todos os produtos
async function listarProduto(req, res) {
  try {
    const todosProdutos = await tbProduto.findAll();
    res.json(todosProdutos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os produtos', error });
  }
}

// Função para buscar produtos por categoria
async function getProdutosCategoria(req, res) {
  const idCategoria = req.params.categoriaId; // Pegando o id da categoria da rota

  try {
    const produtos = await tbProduto.findAll({
      where: { id_categoria: idCategoria },
      include: [
        {
          model: tbCategoria,
          attributes: ['nome_categoria'], // Incluindo o nome da categoria na resposta
        },
      ],
    });

    res.json(produtos); // Retornando os produtos da categoria
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erro ao buscar produtos por categoria', error });
  }
}

async function getProdutosGeneros(req, res) {
  const idGenero = req.params.generoId;
  try {
    const produtos = await tbProduto.findAll({
      where: { id_genero: idGenero },
      include: [
        {
          model: tbGenero,
          attributes: ['nome_genero'],
        },
      ],
    });
    res.json(produtos);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Erro ao buscar produtos por categoria', error });
  }
}

// Exportando as funções
export { listarProduto, getProdutosCategoria, getProdutosGeneros };
