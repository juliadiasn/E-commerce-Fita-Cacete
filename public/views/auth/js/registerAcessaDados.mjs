import urlBase from '../../constantes/urls.mjs';

async function acessaRegisteruser(object) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(object),
  };

  const response = await fetch(urlBase + '/users/register', options);
  const registrado = await response.json();
  return registrado;
}

export {acessaRegisteruser}
