# MarketPlaceAPI

Projeto do módulo 3 - Resilia Educação - WebDev.

# Objetivo

Construir uma API REST com as rotas de um Marketplace.

## Features:

- Cadastrar fornecedores
- Cadastrar clientes
- Fazer compras de produtos cadastrados por fornecedores

# Bibliotecas utilizadas

## Dependências

- **Express:** Framework web que cria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação de API's.<br>
- **Bcrypt:** Uma biblioteca para transformar senhas em hash;<br>
- **Dotenv:** Módulo que carrega variáveis de ambiente de um arquivo .env para process.env. Guarda informações no ambiente separadas do código em si;<br>
- **Mongoose:** Uma ferramenta de modelação de objetos, direcionada para MONGODB, projetada para trabalhar em ambientes assíncronos.<br>
- **Body-parser:** Módulo para conversão do body da requisição para vários formatos.<br>

## Dependências de Desenvolvimento

- **Nodemon:** Ferramenta que derruba e sobe novamente o servidor no ar sempre que alguma mudança é aplicada no código;<br>
- **Mocha:** Framework de desenvolvimento de testes para aplicações de NodeJS;<br>
- **Chai:** Uma biblioteca para realização de testes através de afirmações;<br>
- **Chai-http:** Uma biblioteca para realização de testes HTTP focada em integração;<br>

# Entidades

- **Cliente:**

  - _Nome de usuário:_ Nome de usuário para acessar a conta;
  - _Nome completo:_ Nome associado ao usuário na API;<br>
  - _CPF:_ Documento associado ao usuário na API;<br>
  - _Email:_ E-mail associado ao usuário na API;<br>
  - _Telefone:_ Telefone associado ao usuário na API;<br>
  - _Endereço:_ Endereço associado ao usuário na API;<br>
  - _Senha:_ Senha criptografada através de uma função Hash;<br>
  - _Ativo:_ Estado da conta do usuário, sendo verdadeiro para ativo e falso para inativo;<br>
  - _Data de inativação da conta:_ Esta propriedade só é ativada em caso de deleção de conta, armazenando o momento em que o usuário cancelou a conta;<br>
  - _Salto:_ Identificador único do método utilizado durante a função hash.<br><br>

- **Fornecedor:**

  - _Nome:_ Nome associado ao fornecedor na API;<br>
  - _Razão social:_ Razão Social associada ao fornecedor na API;<br>
  - _CNPJ:_ Documento associado ao fornecedor na API;<br>
  - _Email:_ E-mail associado ao fornecedor na API;<br>
  - _Telefone:_ Telefone associado ao fornecedor na API;<br>
  - _Endereço:_ Endereço associado ao fornecedor na API;<br>
  - _Senha:_ Senha criptografada através de uma função Hash;<br>
  - _Ativo:_ Estado da conta do fornecedor, sendo verdadeiro para ativo e falso para inativo;<br>
  - _Data de inativação da conta:_ Esta propriedade só é ativada em caso de deleção de conta, armazenando o momento em que o fornecedor cancelou a conta;<br>
  - _Salto:_ Identificador único do método utilizado durante a função hash.<br><br>

- **Produto:**

  - _ID do fornecedor:_ Para localização do cadastro do fornecedor;<br>
  - _Nome:_ Nome associado ao produto na API;<br>
  - _Descrição:_ Descrição do produto;<br>
  - _Avaliação:_ Avaliação do produto pelos clientes;<br>
  - _Preço:_ Preço associado ao respectivo produto;<br>
  - _Estoque:_ Quantidade do produto fornecido para venda;<br>
  - _Ativo:_ Estado do produto, sendo verdadeiro para ativo e falso para inativo;<br>
  - _Data de inativação da produto:_ Esta propriedade só é ativada em caso de inativação, armazenando o momento em que o fornecedor cancelou a exibição;<br>

- **Compra:**

  - _ID do cliente:_ Para localização do cadastro do cliente;<br>
  - _ID do produto:_ Para localização do cadastro do produto;<br>
  - _ID do fornecedor:_ Para localização do cadastro do fornecedor;<br>
  - _Valor da compra:_ Descrição do produto;<br>
  - _dataCompra:_ Avaliação do produto pelos clientes;<br>
  - _Ativa:_ Estado da compra, sendo verdadeiro para ativo e falso para inativo;
  - _Data de cancelamento:_ Esta propriedade só é ativada em caso de inativação, armazenando o momento em que o cliente/fornecedor cancelou a compra;<br><br>

# Rotas

GET = LER | POST = CRIAR | PUT = EDITAR | DELETE = DELETAR

## Cliente

- **GET _/user/list_:** Retorna como resposta todos os clientes ativos cadastrados no banco da API;<br>
- **GET(único usuário) _/user/:id_:** Retorna como resposta um único cliente cujo id é passado como parâmetro na URI (substituindo o id);<br>
- **POST _/new-user_:** Adiciona um novo usuário no banco da API, os atributos do usuário devem ser enviados através do corpo da requisição em formato JSON;<br>
- **DELETE _/user/delete/:id_:** Torna inativa a conta do usuário no banco de dados cujo id é passado como parâmetro na URI (substituindo o id);<br>
- **PUT _/update-user/:id_:** Altera os dados do cliente, cujo id foi passado como parâmetro na URI (substituindo o id). As mudanças devem ser passadas através do corpo da requisição em formato JSON.<br><br>

## Fornecedores

- **GET _/providers_:** Retorna como resposta todos os fornecedores ativos cadastrados no banco da API;<br>
- **GET(único fornecedor) _/providers/:id_:** Retorna como resposta um único fornecedor cujo id é passado como parâmetro na URI (substituindo o id);<br>
- **POST _/new-provider_:** Adiciona um novo fornecedor no banco da API, os atributos do fornecedor devem ser enviados através do corpo da requisição em formato JSON;<br>
- **DELETE _/providers/:id_:** Torna inativa a conta do fornecedor no banco de dados cujo id é passado como parâmetro na URI (substituindo o id);<br>
- **PUT _/providers/:id_:** Altera os dados do fornecedor, cujo id foi passado como parâmetro na URI (substituindo o id). As mudanças devem ser passadas através do corpo da requisição em formato JSON.<br><br>

## Produto

- **GET _/products_:** Retorna como resposta todos os produtos ativos cadastrados no banco da API;<br>
- **GET(por fornecedor) _/products/:providerID_:** Retorna como resposta os produtos cadastrados pelo fornecedor, cujo id é passado como parâmetro na URI (substituindo o id);<br>
- **GET(único produto) _/products/:providerID/:productID_:** Retorna como resposta o produto cadastrado pelo fornecedor, cujo id de ambos são passados como parâmetro na URI;<br>
- **POST _/products/new-product_:** Adiciona um novo produto no banco da API, os atributos do produto devem ser enviados através do corpo da requisição em formato JSON;<br>
- **DELETE _/products/:id_:** Torna inativo o produto cujo id é passado como parâmetro na URI;<br>
- **PUT _/products/:id_:** Altera os dados do produto, cujo id foi passado como parâmetro na URI (substituindo o id). As mudanças devem ser passadas através do corpo da requisição em formato JSON.<br><br>

## Compra

- **GET _/purchases/list_:** Retorna como resposta todas as compras ativas cadastradas no banco da API;<br>
- **GET(única compra) _/purchases/product/:id_:** Retorna como resposta uma única compra cujo id do produto associado é passado como parâmetro na URI (substituindo o id);<br>
- **GET(única compra) _/purchases/user/:id_:** Retorna como resposta uma única compra cujo id do cliente associado é passado como parâmetro na URI (substituindo o id);<br>
- **POST _/new-purchase_:** Adiciona uma nova compra no banco da API, os atributos do produto devem ser enviados através do corpo da requisição em formato JSON(devem ser informados, o id do cliente que está realizando a compra, id do fornecedor do produto e o id do produto);<br>
- **PUT _/purchase/:id_:** Torna inativa a compra cujo id foi passado como parâmetro na URI (substituindo o id).<br><br>

## LIVE DEMO

Você pode realizar testes na nossa demonstração hospedada no Heroku.
Para isso, basta colocar as rotas ao final do link: **https://limitless-cove-49173.herokuapp.com/**
