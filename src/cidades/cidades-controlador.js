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

  lista: async (req, res) => {
    try {
      const cidades = await Cidade.lista();
      res.send(cidades);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  },

  deleta: async (req, res) => {
    const cidade = await Cidade.buscaPorId(req.params.id);
    try {
      await cidade.deleta();
      res.status(200).send();
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
};
