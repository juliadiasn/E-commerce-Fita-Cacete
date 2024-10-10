import urlBase from '../../constantes/urls.mjs';

async function getListaProduto() {
  const response = await fetch(urlBase + '/api/produtos/listar');
  const produtos = await response.json();
  return produtos;
}

export {getListaProduto}
