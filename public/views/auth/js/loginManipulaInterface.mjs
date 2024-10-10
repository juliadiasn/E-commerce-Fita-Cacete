import { acessaLoginUser } from './authAcessaDados.mjs';

async function manipulaLoginUser(event) {
  event.preventDefault();

  const iptEmail = document.getElementById('user-email');
  const iptPassword = document.getElementById('user-password');

  const object = {
    email: iptEmail.value,
    password: iptPassword.value,
  };

  await acessaLoginUser(object);
  document.forms[0].reset();

  iptEmail.value = '';
  iptPassword.value = '';
}

const btEntrar = document.getElementById('bt-entrar');
btEntrar.addEventListener('click', manipulaLoginUser);
