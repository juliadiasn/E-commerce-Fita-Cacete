function gerarCodigoRastreio() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numeros = '0123456789';

  let codigo = '';
  for (let i = 0; i < 3; i++) {
    codigo += letras.charAt(Math.floor(Math.random() * letras.length));
  }

  for (let i = 0; i < 10; i++) {
    codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
  }

  return codigo;
}

const codigoRastreio = gerarCodigoRastreio();
document.getElementById('codigo-rastreio').textContent = codigoRastreio;

const dataAtual = new Date();
const dataEntrega = new Date(dataAtual);
dataEntrega.setDate(dataAtual.getDate() + 14);

const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
const dataEntregaFormatada = dataEntrega.toLocaleDateString('pt-BR', opcoes);

document.getElementById('data-entrega').textContent = dataEntregaFormatada;
