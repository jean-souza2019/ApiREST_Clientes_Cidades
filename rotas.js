const cidade = require('./src/routes/cidade');
const cliente = require('./src/routes/cliente');

module.exports = app => {
  cidade(app)
  cliente(app)
};