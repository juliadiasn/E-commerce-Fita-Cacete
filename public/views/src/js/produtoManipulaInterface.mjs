import { getListaProduto } from './produtoAcessaDados.mjs';

async function desenhaCard() {
  const dadosProdutos = await getListaProduto();

  const productList = document.getElementById('product-list');

  dadosProdutos.forEach(produto => {
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

    productList.append(productCard);
  });
}

window.onload = desenhaCard;
