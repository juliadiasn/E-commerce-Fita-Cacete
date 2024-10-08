import urlBase  from '../../constantes/urls.mjs';

async function acessaLoginUser(object) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  };

  const response = await fetch(urlBase + '/users/login', options);
  const logado = await response.json();
  return logado;
}

export {acessaLoginUser}
