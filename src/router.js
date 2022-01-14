const cidade = require('./routes/cidade');
const cliente = require('./routes/cliente');

module.exports = app => {
  cidade(app)
  cliente(app)
};