import {
  getListaProduto,
  getProdutosCategoria,
  getProdutosGenero,
} from './produtoAcessaDados.mjs';

/// Função para exibir o modal com a descrição do produto
function mostrarDescricao(titulo, descricao) {
  document.getElementById('tituloModal').innerText = titulo;
  document.getElementById('descricaoTexto').innerText = descricao;
  document.getElementById('modalDescricao').style.display = 'block';
}

export function fecharModal() {
  document.getElementById('modalDescricao').style.display = 'none';
}

document.querySelector('.close').addEventListener('click', fecharModal);

// Modificação em criaCardProduto para adicionar o evento de clique no botão de descrição
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
    <button class="descricao">Ver Descrição</button>
  `;

  // Adiciona o evento de clique no botão de descrição
  productCard.querySelector('.descricao').addEventListener('click', () => {
    mostrarDescricao(produto.nome_produto, produto.descricao);
  });

  return productCard;
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function (event) {
  const modal = document.getElementById('modalDescricao');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

async function desenhaProdutosNaPagina(produtos) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  produtos.forEach(produto => {
    const productCard = criaCardProduto(produto);
    productList.appendChild(productCard);
  });
}

async function carregarProdutos(filtrarFunc, id, nome) {
  try {
    const produtos = await filtrarFunc(id);
    desenhaProdutosNaPagina(produtos);
    atualizarTituloCategoria(nome);
  } catch (error) {
    console.error(`Erro ao buscar produtos de ${nome}:`, error);
  }
}

async function carregarTodosProdutos() {
  try {
    const todosProdutos = await getListaProduto();
    desenhaProdutosNaPagina(todosProdutos);
    atualizarTituloCategoria('Todos os Produtos');
  } catch (error) {
    console.error('Erro ao carregar todos os produtos:', error);
  }
}

function atualizarTituloCategoria(nome) {
  const tituloCategoria = document.getElementById('category-title');
  tituloCategoria.textContent = nome;
}

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
          if (selecionado === 'crime') {
            id = 1;
            nome = 'Crime';
          } else if (selecionado === 'aventura') {
            id = 2;
            nome = 'Aventura';
          } else if (selecionado === 'comedia') {
            id = 3;
            nome = 'Comédia';
          } else if (selecionado === 'romance') {
            id = 4;
            nome = 'Romance';
          } else if (selecionado === 'terror') {
            id = 5;
            nome = 'Terror';
          } else if (selecionado === 'drama') {
            id = 6;
            nome = 'Drama';
          } else if (selecionado === 'ficcao') {
            id = 7;
            nome = 'Ficção';
          } else if (selecionado === 'acao') {
            id = 8;
            nome = 'Ação';
          } else if (selecionado === 'triller') {
            id = 9;
            nome = 'Triller';
          } else if (selecionado === 'rock') {
            id = 10;
            nome = 'Rock';
          }
          carregarProdutos(getProdutosGenero, id, nome);
        }
      }
    });
  });
}

window.onload = () => {
  carregarTodosProdutos();
  associarEventos('.menu-item', 'categoria');
  associarEventos('.menu-gender', 'genero');
};
