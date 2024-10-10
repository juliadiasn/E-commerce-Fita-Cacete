import urlBase from '../../constantes/urls.mjs';

async function acessaRegisteruser(object) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  };

  const response = await fetch(urlBase + '/api/users/register', options);
  const registrado = await response.json();
  return registrado;
}

async function acessaLoginUser(object) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  };

  const response = await fetch(urlBase + '/api/users/login', options);
  const logado = await response.json();
  return logado;
}



export { acessaRegisteruser, acessaLoginUser };
