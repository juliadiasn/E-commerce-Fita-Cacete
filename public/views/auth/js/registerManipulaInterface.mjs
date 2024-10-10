import { acessaRegisteruser } from './authAcessaDados.mjs';

async function manipulaRegisterUser(event) {
  event.preventDefault();

  const iptNome = document.getElementById('user-nome');
  const iptEmail = document.getElementById('user-email');
  const iptPassword = document.getElementById('user-password');

  const object = {
    nome: iptNome.value,
    email: iptEmail.value,
    password: iptPassword.value,
  };

  if (!iptNome.value || !iptEmail.value || !iptPassword.value) {
    window.alert('Existem campos vazios');
  } else {
    await acessaRegisteruser(object);
  }
  document.forms[0].reset();
  iptNome.value = '';
  iptEmail.value = '';
  iptPassword.value = '';
}

// * Vinculações
const btEntrar = document.getElementById('bt-entrar');
btEntrar.addEventListener('click', manipulaRegisterUser);
