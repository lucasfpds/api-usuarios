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


Abaixo segue algumas informações sobre os endpoints:


#### `POST` `/contas`

