import urlBase from '../../constantes/urls.mjs';

// Função para listar todos os produtos
async function getListaProduto() {
  try {
    const response = await fetch(`${urlBase}/api/produtos/listar`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar a lista de produtos');
    }
    
    const produtos = await response.json();
    return produtos;
  } catch (error) {
    console.error('Erro na requisição de produtos:', error);
    return { error: error.message };
  }
}

// Função para buscar produtos por categoria
async function getProdutosCategoria(idCategoria) {
  try {
    const response = await fetch(`${urlBase}/api/produtos/categoria/${idCategoria}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos por categoria');
    }

    const produtos = await response.json();
    return produtos;
  } catch (error) {
    console.error(`Erro ao buscar produtos da categoria ${idCategoria}:`, error);
    return { error: error.message };
  }
}


async function getProdutosGenero(idGenero) {
  try {
    const response = await fetch(`${urlBase}/api/produtos/genero/${idGenero}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos por categoria');
    }

    const produtos = await response.json();
    return produtos;
  } catch (error) {
    console.error(`Erro ao buscar produtos do genero ${idGenero}:`, error);
    return { error: error.message };
  }
}



export { getListaProduto, getProdutosCategoria, getProdutosGenero};
