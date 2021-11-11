# api-usuarios

<p>
JavaScript | NodeJS | Express | JWT | BCRYPT | PostgreSQL | Knex | Yup <br><br>
REST API onde é possível obter e fazer alterações em um banco de dados relacional utilizando token, encriptação de senha, e auxílio do knex e yup para um clean code ainda melhor.
</p>

## 📝 Open API

Fora do servidor Node, a aplicação vem com Swagger; uma [documentação aberta da API](https://swagger.io/specification/), que é usada para descrever APIs RESTful.

**Acesse o Swagger UI dessa aplicação aqui na [Heroku](https://api-usuarios-beta.herokuapp.com/docs/)**

<br>

<h2>📷 Preview</h2>

<img src="./api-usuarios.gif">

## Pré-requisitos

- [NodeJS](https://nodejs.org/en/download/)

## 🛠️ Instalação	

```bash
#Fazer o fork do repositório para sua conta

#Executar git clone do seu fork no terminal para clonar o repositório

# Instale as Dependências para o funcionamento do projeto
$ npm install
```

## 🔒 Environment

Por padrão, após a instalação das dependências a aplicação vem com um módulo de configuração que pode ler todas as variáveis ​​de ambiente do arquivo `.env`.

```bash
# Crie um arquivo .env usando de exemplo o arquivo .env.example
$ cp .env.example .env
```

| Key                       | Description                                                          | Default Value              |
| ------------------------- | -------------------------------------------------------------------- | -------------------------- |
| PORT                      | Porta da aplicação.                                                  | 3000                       |
| USER                      | Usuário do banco de dados                                            | usuario                    |
| HOST                      | Endpoint do banco de dados                                           | localhost                  |
| DATABASE                  | Nome do banco de dados                                               | banco_de_dados             |
| PASSWORD                  | Senha do banco de dados                                              | 123456                     |
| PASSWORD_JWT              | Senha para geração do Json Web Token                                 | a0B1c2D3e4F5g6H7i8J9k      |

## 🏃 Executando o app

```bash
# Para somente executar, após a instalação use:
$ npm run start

# Se você vai realizar desenvolvimento use:
$ npm run dev
```

5. Aplicação ficará disponível em **http://localhost:3000** caso o valor padrão não seja alterado.


Abaixo segue as regras de negócio incluidas na API:


#### `POST` `/contas`

Para o cadastro é necessário informar todos os dados como no exemplo abaixo.

```json
{
    "nome": "lucas",
    "email": "lucas@email.com",
    "senha": "123456",
    "nome_loja": "Loja das Arvores"
}

```

#### `POST` `/login`

Para o login é obrigatório informar o email e a senha como no exemplo abaixo.

```json
{
    "email": "lucas@email.com",
    "senha": "123456"
}
```


O retorno da requisição é um Json Web Token (JWT) que é utilizado para autenticação. Como no exemplo abaixo:

```json
{
  "usuario": {
    "id": 1,
    "nome": "lucas",
    "email": "lucas@email.com",
    "nome_loja": "Loja das Arvores"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM2NTc3MjcyLCJleHAiOjE2MzY2MDYwNzJ9.1YY4yGz8vQaZRfHNTNNPU82JqUxOOpKpuo_jEMVz5UA"
}
```


Copie somente o codigo entre parenteses para utilizar nas próximas requisições, colando o token no cabeçalho da requisição como Bearer Token.


#### `GET` `/perfil`

Esta rota retorna o perfil do usuário logado. Não é necessário informar nada no body da requisição apenas o token no cabeçalho da requisição como Bearer Token. A requisição vai retornar o perfil do usuário logado.

```json
{
  "id": 1,
  "nome": "lucas",
  "email": "lucas@email.com",
  "nome_loja": "Loja das Arvores"
}

```
#### `PUT` `/perfil`

Esta rota faz a alteração do perfil do usuário logado. É necessário informar ao menos um dos campos para alteração. Caso um novo email seja informado, o mesmo será validado. Caso o email já exista no banco de dados, a requisição retornará um erro.

###### tags: `JavaScript`  `NodeJS`  `Express`  `JWT`  `BCRYPT`  `PostgreSQL`  `Knex`  `Yup`