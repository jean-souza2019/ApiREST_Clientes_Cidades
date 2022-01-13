const cidadesControlador = require('./cidades-controlador');

module.exports = app => {
  app
    .route('/cidade')
    .get(cidadesControlador.lista)
    .post(cidadesControlador.adiciona);
  
  app.route('/cidade/:id').delete(cidadesControlador.deleta);
};
