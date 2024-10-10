import {
  getListaProduto,
  getProdutosCategoria,
  getProdutosGenero,
} from './produtoAcessaDados.mjs';

// Função para criar um card de produto
function criaCardProduto(produto) {
  const productCard = document.createElement('div');
  productCard.classList.add('card-product');

  productCard.innerHTML = `
    <img
      src="/produtos${produto.imagem_produto}" 
      alt="Imagem do produto"
      class="image-product"
    />
    <h4>${produto.nome_produto}</h4>
    <p>R$ ${produto.preco_produto}</p>
    <div class="buttons">
      <button class="btn-comprar">Comprar</button>
      <button class="btn-descricao">Ver descrição</button>
    </div>
  `;

  return productCard;
}

// Função para desenhar os produtos na página
async function desenhaProdutosNaPagina(produtos) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Limpa a lista antes de desenhar novos produtos

  produtos.forEach(produto => {
    const productCard = criaCardProduto(produto);
    productList.appendChild(productCard);
  });
}

// Função para carregar produtos com base no tipo (categoria ou gênero)
async function carregarProdutos(filtrarFunc, id, nome) {
  try {
    const produtos = await filtrarFunc(id);
    desenhaProdutosNaPagina(produtos);
    atualizarTituloCategoria(nome); // Atualiza o título da categoria/gênero
  } catch (error) {
    console.error(`Erro ao buscar produtos de ${nome}:`, error);
  }
}

// Função para carregar todos os produtos
async function carregarTodosProdutos() {
  try {
    const todosProdutos = await getListaProduto();
    desenhaProdutosNaPagina(todosProdutos);
    atualizarTituloCategoria("Todos os Produtos"); // Atualiza para "Todos"
  } catch (error) {
    console.error('Erro ao carregar todos os produtos:', error);
  }
}

// Função para atualizar o título da categoria/gênero
function atualizarTituloCategoria(nome) {
  const tituloCategoria = document.getElementById('category-title');
  tituloCategoria.textContent = nome;
}

// Função para associar eventos de clique genéricos para categorias e gêneros
function associarEventos(menuSelector, tipo) {
  const menuItens = document.querySelectorAll(menuSelector);

  menuItens.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const selecionado = item.getAttribute('href').replace('#', '');

      if (selecionado === 'todos') {
        carregarTodosProdutos();
      } else {
        let id, nome;
        if (tipo === 'categoria') {
          if (selecionado === 'vhs') {
            id = 1;
            nome = 'VHS';
          } else if (selecionado === 'cassete') {
            id = 2;
            nome = 'Cassete';
          }
          carregarProdutos(getProdutosCategoria, id, nome);
        } else if (tipo === 'genero') {
          if (selecionado === 'novidades') {
            id = 1;
            nome = 'Novidades';
          } else if (selecionado === 'cinema') {
            id = 2;
            nome = 'Cinema';
          } else if (selecionado === 'musica') {
            id = 3;
            nome = 'Música';
          } else if (selecionado === 'famosos') {
            id = 4;
            nome = 'Famosos';
          } else if (selecionado === 'historicos') {
            id = 5;
            nome = 'Históricos';
          } else if (selecionado === 'raros') {
            id = 6;
            nome = 'Edições Raras';
          }
          carregarProdutos(getProdutosGenero, id, nome);
        }
      }
    });
  });
}

// Carrega todos os produtos na inicialização da página
window.onload = () => {
  carregarTodosProdutos();
  associarEventos('.menu-item', 'categoria'); // Associa os eventos de categoria
  associarEventos('.menu-gender', 'genero'); // Associa os eventos de gênero
};
