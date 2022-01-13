const Cliente = require('./clientes-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');

module.exports = {
  adiciona: async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
      const cliente = new Cliente({
        nome,
        email
      });

      await cliente.adicionaSenha(senha);
      await cliente.adiciona();

      res.status(201).json();
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
    const cliente = await Cliente.lista();
    res.json(cliente);
  },

  deleta: async (req, res) => {
    const cliente = await Cliente.buscaPorId(req.params.id);
    try {
      await cliente.deleta();
      res.status(200).send();
    } catch (erro) {
      res.status(500).json({ erro: erro });
    }
  }
};
