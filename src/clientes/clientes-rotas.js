const clientesControlador = require('./clientes-controlador');

module.exports = app => {
  app.route('/cliente').post(clientesControlador.adiciona);
  app.route('/cliente/nome/:nomeCompleto').get(clientesControlador.buscaPorNome);
  app.route('/cliente/id/:id').get(clientesControlador.buscaPorId);
  app.route('/cliente/:id').delete(clientesControlador.deleta);
  app.route('/cliente/:id').put(clientesControlador.atualiza); 
};
