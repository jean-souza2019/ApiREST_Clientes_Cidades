const Cliente = require('./clientes-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');

module.exports = {
  adiciona: async (req, res) => {
    const { nomeCompleto, sexo, dataNascimento, idade, cidade } = req.body;

    try {
      const cliente = new Cliente({
        nomeCompleto,
        sexo,
        dataNascimento,
        idade,
        cidade
      });
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

  atualiza: async (req, res) => {
    const id = req.params.id;
    const { nomeCompleto, sexo, dataNascimento, idade, cidade } = req.body;

    
    try {
      const cliente = new Cliente({
        id,
        nomeCompleto,
        sexo,
        dataNascimento,
        idade,
        cidade
      });
      await cliente.atualiza();
      
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

  buscaPorNome: async (req, res) => {
    try {
      const cliente = await Cliente.buscaPorNome(req.params.nomeCompleto);
      res.send(cliente);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  },

  buscaPorId: async (req, res) => {
    try {
      const cliente = await Cliente.buscaPorId(req.params.id);
      res.send(cliente);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
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