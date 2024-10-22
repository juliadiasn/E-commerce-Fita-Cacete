import urlBase from '../../constantes/urls.mjs';

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

async function fetchUserProfile() {
  try {
      const response = await fetch('/api/users/profile', {
          method: 'GET',
          credentials: 'include' 
      });

      if (response.ok) {
          const userProfile = await response.json();
          return userProfile.id; 
      } else {
          console.error('Erro ao recuperar o perfil:', response.statusText);
          return null;
      }
  } catch (error) {
      console.error('Erro ao recuperar o perfil:', error);
      return null;
  }
}


export { getListaProduto, getProdutosCategoria, getProdutosGenero, fetchUserProfile};
