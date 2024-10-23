
# E-commerce Fitas Cacete

Projeto da disciplina Projeto Integrador III - IFMG *Campus* São João Evangelista.
**Observação:** Tentamos hospedar o site com o banco de dados, mas nenhuma tentativa funcionou. Desculpe.

**Grupo 6A - I3A:**
- Isadora Magalhães - Conteúdo
- Júlia Dias - Desenvolvimento
- Júlia Pascoal - Pesquisa
- Rian Kayque - Design


### Meios de Contato
Se você tiver alguma dúvida, sugestão ou quiser conversar sobre o projeto, sinta-se à vontade para entrar em contato conosco:

- **Email**: juliadiasndeveloper@gmail.com

Estamos abertos a feedbacks e colaborações!


## Introdução
O e-commerce Fita Cacete foi desenvolvido a partir de uma pesquisa de mercado conduzida por Júlia Pascoal, que incluiu um formulário e análise de sites concorrentes. Com base nos resultados, definimos nossa proposta de valor, a estética do site, a paleta de cores e as melhores práticas de acessibilidade.

### Pesquisa de Mercado
Criamos um formulário no *Google Forms* com 14 perguntas variadas (múltipla escolha, caixas de seleção e campos de texto), respeitando a LGPD (Lei Geral de Proteção de Dados Pessoais). Os dados indicaram que nosso público-alvo é composto principalmente por jovens entre 18 e 24 anos, residentes em São João Evangelista, interessados em produtos por motivos de nostalgia e colecionismo.

### Análise da Concorrência
Analisamos os principais sites de e-commerce voltados para produtos similares, identificando as características mais marcantes de cada um. Essa comparação nos permitiu identificar estratégias e oportunidades que podem ser aproveitadas para destacar nosso site no mercado.

## Protótipo
Optamos por uma paleta de cores azul e roxa, com um gradiente na página inicial que remete ao fundo do mar, simbolizando a "decadência" das fitas no contexto atual.

### Conceito e Design Visual
O design do nosso e-commerce combina nostalgia com modernidade. A imagem de uma fita caindo sobre um gradiente azul e roxo cria uma sensação de transição do analógico para o digital, enquanto o gradiente simboliza a profundidade e as possibilidades do comércio online. As cores foram escolhidas para transmitir tanto a sofisticação (roxo) quanto a serenidade (azul).

### Interface do Usuário
Criamos uma interface minimalista e intuitiva. Logo na página inicial, o usuário encontra dois menus principais que facilitam a navegação: **categorias** e **gêneros**. Ícones visíveis para o **carrinho de compras** e o **perfil do usuário** garantem uma experiência de navegação simples e eficiente.

### Rodapé
O rodapé é discreto, mas funcional, contendo informações sobre a equipe, formas de contato e créditos dos membros do grupo.

**Acesse o protótipo pelo link:** https://www.figma.com/design/rbV2ik7pUtkSDtiC77vVli/Loja-de-fitas?node-id=0-1&t=7EaO2UJpEwFwIIVq-1

## Desenvolvimento


### Tecnologias Usadas
Além de **MySQL** para o banco de dados e **Node.js** para o backend, utilizamos as seguintes bibliotecas e frameworks para melhorar a funcionalidade do site:

- **bcrypt**: Para hash e segurança de senhas.
- **cookie-parser**: Para manipulação de cookies no lado do servidor.
- **cors**: Para habilitar o compartilhamento de recursos entre diferentes origens.
- **dotenv**: Para gerenciar variáveis de ambiente.
- **express**: O framework principal para a construção do servidor web.
- **jsonwebtoken**: Para a geração e verificação de tokens de autenticação.
- **mysql2**: Biblioteca para conectar e manipular o banco de dados MySQL.
- **nodemon**: Para reiniciar automaticamente o servidor durante o desenvolvimento.
- **sequelize**: Um ORM (Object-Relational Mapping) para facilitar as operações com o banco de dados.

### Testes e Validação
Desde o início da criação do projeto, realizamos testes contínuos para garantir que cada funcionalidade fosse implementada corretamente e estivesse de acordo com os objetivos do e-commerce. Testamos o funcionamento da API, as integrações com o banco de dados, a segurança dos dados dos usuários (especialmente em relação à autenticação e manipulação de senhas), e a acessibilidade da interface.

Isso garantiu que cada etapa do desenvolvimento fosse bem monitorada, permitindo correções e melhorias constantes.


## Como Usar

Para o desenvolvimento do site, utilizamos o banco de dados **MySQL** e o backend em **NodeJS**.

### Requisitos:
- Ter o **Visual Studio Code** e o **MySQL Workbench** instalados.
- Instalar o **MySQL**, **Node.js**, e um navegador de internet.

### Passo a Passo:
1. Instale as dependências do projeto com o comando `npm i` no terminal.
2. Abra o arquivo "sql.sql" no MySQL Workbench e execute-o para configurar o banco de dados corretamente.
3. Para iniciar o servidor, utilize o comando `npm start`.
4. Acesse o site em seu navegador usando a URL: `http://localhost:3000`.

Agora o site está pronto para uso.


## Considerações Finais
Com o desenvolvimento desse e-commerce, adquirimos novas habilidades e ideias para futuros projetos. Em algum momento, pretendemos melhorar esse projeto, implementando novas funcionalidades e aprimorando suas capacidades para torná-lo ainda mais completo e eficiente.

### Plano de Melhorias
Apesar de o e-commerce Fita Cacete estar funcional, identificamos algumas melhorias e novas funcionalidades que pretendemos implementar no futuro para tornar a experiência do usuário ainda mais completa e eficiente:

1. **Integração com Gateways de Pagamento**: Adicionar suporte para pagamentos online via plataformas como **PayPal**, **PagSeguro**, e **Stripe**, oferecendo mais segurança e facilidade na finalização de compras.
2. **Sistema de Avaliação e Comentários**: Permitir que os usuários deixem avaliações e comentários sobre os produtos, criando uma interação mais rica e proporcionando maior confiança para futuros clientes.
3. **Sistema de Busca Avançada**: Melhorar o sistema de busca para permitir filtros mais refinados, como por autor ou cantor, ano de lançamento, e preço.
4. **Integração com Redes Sociais**: Permitir que os usuários compartilhem produtos diretamente em suas redes sociais, aumentando a visibilidade e o alcance do e-commerce.
5. **Otimização para SEO**: Implementar técnicas de otimização para motores de busca (SEO), garantindo que o site tenha maior visibilidade nos resultados de pesquisa do Google e outros buscadores.
6. **Responsividade Melhorada**: Embora o site seja funcional em dispositivos móveis, planejamos aprimorar ainda mais a responsividade, garantindo uma experiência perfeita em diferentes tamanhos de tela.
7. **Segurança Reforçada**: Continuar aprimorando a segurança do site com monitoramento de vulnerabilidades, implementação de autenticação multifator (MFA), e melhorias no gerenciamento de senhas e dados sensíveis.
8. **Uso de Cupons e Promoções**: Implementar um sistema de cupons de desconto e promoções, permitindo que os usuários recebam benefícios em suas compras, incentivando a fidelização e aumentando as vendas.


### Licença
Este projeto está licenciado sob a **GNU General Public License v3.0**.

**Licença GNU General Public License v3.0 (GPL-3.0):**
Você tem permissão para copiar, distribuir e/ou modificar este software sob os termos da Licença Pública Geral GNU, conforme publicada pela Free Software Foundation, versão 3 da licença, ou (a seu critério) qualquer versão posterior.

- O software é fornecido "como está", sem garantia de qualquer tipo, expressa ou implícita, incluindo, mas não se limitando às garantias de comercialização, adequação a um propósito específico e não violação.
- Não é permitido redistribuir ou sublicenciar o software para fins comerciais ou de venda.
- As modificações e distribuições devem manter a mesma licença, ou seja, qualquer versão modificada deste software também deve ser gratuita para todos.

Para mais detalhes, veja o arquivo [LICENSE](https://www.gnu.org/licenses/gpl-3.0.html).

