import {
  getListaProduto,
  getProdutosCategoria,
  getProdutosGenero,
} from './produtoAcessaDados.mjs';

/// Função para exibir o modal com a descrição do produto
function mostrarDescricao(descricao) {
  document.getElementById("descricaoTexto").innerText = descricao;
  document.getElementById("modalDescricao").style.display = "block";
}

export function fecharModal() {
  document.getElementById("modalDescricao").style.display = "none";
}

document.querySelector(".close").addEventListener("click", fecharModal);


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
    mostrarDescricao(produto.descricao);
  });

  return productCard;
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function (event) {
  const modal = document.getElementById("modalDescricao");
  if (event.target === modal) {
    modal.style.display = "none";
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

window.onload = () => {
  carregarTodosProdutos();
  associarEventos('.menu-item', 'categoria');
  associarEventos('.menu-gender', 'genero');
};
