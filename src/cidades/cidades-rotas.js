const cidadesControlador = require('./cidades-controlador');

module.exports = app => {
  app.route('/cidades').get(cidadesControlador.lista)
  app.route('/cidade').post(cidadesControlador.adiciona);
  app.route('/cidade/:nome').get(cidadesControlador.buscaPorNome);
  app.route('/estado/:estado').get(cidadesControlador.buscaPorEstado);

};
