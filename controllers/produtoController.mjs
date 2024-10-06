import Produto from '../models/produtoModel.mjs';

(async () => {
  try {
    const novoProduto = await Produto.create({
      nome: 'Produto Exemplo',
      preco: 99.99,
      descricao: 'Descrição do produto exemplo',
    });
    console.log('Produto criado:', novoProduto.toJSON());

    // Listar todos os produtos
    const produtos = await Produto.findAll();
    console.log(
      'Lista de produtos:',
      produtos.map(p => p.toJSON()),
    );
  } catch (error) {
    console.error('Erro nas operações de produtos:', error);
  }
})();
