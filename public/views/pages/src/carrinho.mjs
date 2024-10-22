document.addEventListener('DOMContentLoaded', () => {
  async function fetchUserProfile() {
    try {
      const response = await fetch('/api/users/profile', {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const userProfile = await response.json();
        document.getElementById('user-name').textContent = userProfile.nome;
      } else if (response.status === 401) {
        window.location.href = '/auth/loginView.html';
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  const produtosCarrinho = [];

  const tbody = document.querySelector('#carrinho tbody');
  const totalItensElement = document.querySelector('.itens');
  const subtotalElement = document.querySelector('.subtotal');
  const freteElement = document.querySelector('.frete');
  const totalFinalElement = document.querySelector('.total-final');
  const selectProdutos = document.getElementById('select-produtos');
  const quantidadeInput = document.getElementById('produto-quantidade');

  // Função para calcular o subtotal (sem frete)
  const calcularSubtotal = () => {
    return produtosCarrinho.reduce(
      (acc, produto) => acc + produto.preco * produto.quantidade,
      0,
    );
  };

  // Função para atualizar o total do carrinho
  const atualizarTotais = () => {
    const subtotal = calcularSubtotal();
    const frete = 0.1 * subtotal; // Valor fixo do frete
    const total = subtotal + frete;

    subtotalElement.textContent = `R$ ${subtotal.toFixed(2)}`;
    freteElement.textContent = `R$ ${frete.toFixed(2)}`;
    totalFinalElement.textContent = `R$ ${total.toFixed(2)}`;

    totalItensElement.textContent = produtosCarrinho.reduce(
      (acc, produto) => acc + produto.quantidade,
      0,
    );
  };

  // Função para renderizar os produtos no carrinho
  const renderizarCarrinho = () => {
    tbody.innerHTML = ''; // Limpa a tabela antes de renderizar
    produtosCarrinho.forEach((produto, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
              <td>${produto.nome}</td>
              <td>R$ ${produto.preco.toFixed(2)}</td>
              <td>
                  <input type="number" value="${
                    produto.quantidade
                  }" min="1" data-index="${index}" class="quantidade-input">
              </td>
              <td>R$ ${(produto.preco * produto.quantidade).toFixed(2)}</td>
              <td><button class="remover" data-index="${index}">Remover</button></td>
          `;
      tbody.appendChild(tr);
    });
    atualizarTotais();
  };

  // Função para adicionar um produto ao carrinho
  const adicionarCarrinho = produto => {
    const produtoExistente = produtosCarrinho.find(
      item => item.nome === produto.nome,
    );

    if (produtoExistente) {
      produtoExistente.quantidade += produto.quantidade;
    } else {
      produtosCarrinho.push(produto);
    }

    renderizarCarrinho();
  };

  // Função para buscar produtos do banco de dados
  // Função para buscar produtos do banco de dados
  const buscarProdutos = async () => {
    try {
      const response = await fetch('/api/produtos/listar'); // URL do seu endpoint
      if (response.ok) {
        const produtos = await response.json();
        produtos.forEach(produto => {
          // console.log(produto); // Log each product to see the returned structure

          // Ensure preco_produto is a number
          const preco = parseFloat(produto.preco_produto);

          // Check if the conversion was successful
          if (isNaN(preco)) {
            console.error(
              `Preço inválido para o produto ${produto.nome_produto}:`,
              produto.preco_produto,
            );
            return; // Skip this product if price is invalid
          }

          const option = document.createElement('option');
          option.value = produto.id; // ID do produto
          option.textContent = `${produto.nome_produto} - R$ ${preco.toFixed(
            2,
          )}`; // Usando as propriedades do seu modelo
          selectProdutos.appendChild(option);
        });
      } else {
        console.error('Erro ao buscar produtos');
      }
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  // Evento para adicionar o produto selecionado ao carrinho
  // Evento para adicionar o produto selecionado ao carrinho
  document
    .getElementById('adicionar-ao-carrinho')
    .addEventListener('click', () => {
      const selectedOption =
        selectProdutos.options[selectProdutos.selectedIndex];
      if (selectedOption.value) {
        const produtoId = selectedOption.value;
        const quantidade = parseInt(quantidadeInput.value);
        const produtoNome = selectedOption.textContent.split(' - ')[0]; // Extrair nome
        const produtoPreco = parseFloat(
          selectedOption.textContent.split(' - R$ ')[1],
        ); // Extrair preço

        const novoProduto = {
          nome: produtoNome,
          preco: produtoPreco,
          quantidade,
        };

        adicionarCarrinho(novoProduto);

        // Limpar os campos do formulário após adicionar
        selectProdutos.selectedIndex = 0; // Resetar o select para a opção padrão
        quantidadeInput.value = 1; // Resetar quantidade para 1
      } else {
        alert('Por favor, selecione um produto.');
      }
    });

  // Função para atualizar a quantidade de um produto
  const atualizarQuantidade = (index, novaQuantidade) => {
    if (novaQuantidade >= 1) {
      produtosCarrinho[index].quantidade = novaQuantidade;
      renderizarCarrinho();
    }
  };

  // Função para remover um produto do carrinho
  const removerProduto = index => {
    produtosCarrinho.splice(index, 1);
    renderizarCarrinho();
  };

  // Evento para os campos de entrada de quantidade
  tbody.addEventListener('input', event => {
    if (event.target.classList.contains('quantidade-input')) {
      const index = event.target.dataset.index;
      const novaQuantidade = parseInt(event.target.value);
      atualizarQuantidade(index, novaQuantidade);
    }
  });

  // Evento para remover um produto do carrinho
  tbody.addEventListener('click', event => {
    if (event.target.classList.contains('remover')) {
      const index = event.target.dataset.index;
      removerProduto(index);
    }
  });

  // Função para validar os campos do formulário
  const validarFormulario = () => {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cpfCnpj = document.getElementById('cpf-cnpj').value.trim();
    const dataNasc = document.getElementById('data-nasc').value.trim();

    const camposVazios = [];

    if (!nome) camposVazios.push('Nome completo');
    if (!email) camposVazios.push('Email');
    if (!telefone) camposVazios.push('Celular com DDD');
    if (!cpfCnpj) camposVazios.push('CPF/CNPJ');
    if (!dataNasc) camposVazios.push('Data de Nascimento');

    if (camposVazios.length > 0) {
      alert(
        `Por favor, preencha os seguintes campos:\n- ${camposVazios.join(
          '\n- ',
        )}`,
      );
      return false; // Retorna false se houver campos vazios
    }
    return true; // Retorna true se todos os campos estão preenchidos
  };

  // Evento para o botão "Finalizar Compra"
  document.getElementById('finalizarCompra').addEventListener('click', () => {
    if (validarFormulario()) {
      // Redireciona para a página de agradecimento após finalizar a compra
      window.location.href = '/pages/final.html'; // Altere o caminho se necessário
    }
  });

  // Carrega produtos ao carregar a página
  window.onload = async () => {
    await fetchUserProfile();
    await buscarProdutos();
    renderizarCarrinho();
  };

  renderizarCarrinho();
});
