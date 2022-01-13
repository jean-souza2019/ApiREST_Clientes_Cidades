const Cidade = require('./cidades-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');

module.exports = {
  adiciona: async (req, res) => {
    try {
      const cidade = new Cidade(req.body);
      await cidade.adiciona();

      res.status(201).send(cidade);
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  buscaPorNome: async (req, res) => {
    try {
      const cidades = await Cidade.buscaPorNome(req.params.nome);
      res.send(cidades);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  },
  
  buscaPorEstado: async (req, res) => {
    try {
      const cidades = await Cidade.buscaPorEstado(req.params.estado);
      res.send(cidades);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  }

};