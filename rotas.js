const cidades = require('./src/cidades');
const clientes = require('./src/clientes');

module.exports = app => {
  cidades.rotas(app);
  clientes.rotas(app);
};