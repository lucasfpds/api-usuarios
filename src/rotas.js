const express = require("express");
const swaggerUi = require("swagger-ui-express");
const rotas = express();

rotas.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(require("../swagger.json"))
);

const filtroLogin = require("./filtros/filtroLogin");
const { login } = require("./controladores/autenticacao");
const {
  cadastrarUsuario,
  obterPerfil,
  atualizarPerfilUsuario,
} = require("./controladores/usuarios");

rotas.get("/", (req, res) => {
  res.send(`Server running on port ${process.env.PORT}`)
});

rotas.post("/usuarios", cadastrarUsuario);

rotas.post("/login", login);

rotas.use(filtroLogin);

rotas.get("/perfil", obterPerfil);

rotas.put("/perfil", atualizarPerfilUsuario);

module.exports = rotas;
