const clientesControlador = require('./clientes-controlador');

module.exports = app => {
  app
    .route('/cliente')
    .post(clientesControlador.adiciona)
    .get(clientesControlador.lista);

  app.route('/cliente/:id').delete(clientesControlador.deleta);
};
