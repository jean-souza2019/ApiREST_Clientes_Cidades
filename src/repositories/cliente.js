const db = require('../../config/database');
const { InternalServerError } = require('../erros');

module.exports = {
  adiciona: cliente => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          INSERT INTO clientes (
            nomeCompleto,
            sexo,
            dataNascimento,
            idade,
            cidade
          ) VALUES (?, ?, ?, ?, ?)
        `,
        [cliente.nomeCompleto, cliente.sexo, cliente.dataNascimento,
        cliente.idade, cliente.cidade],
        erro => {
          if (erro) {
            reject(new InternalServerError('Erro ao adicionar o cliente!'));
          }

          return resolve();
        }
      );
    });
  },

  atualiza: cliente => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          UPDATE clientes
          SET nomeCompleto = ?
          WHERE id = ?
        `,
        [cliente.nomeCompleto, cliente.id],
        erro => {
          if (erro) {
            return reject('Erro ao deletar o cliente');
          }
          return resolve();
        }
      );
    });
  },

  buscaPorNome: nomeCompleto => {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT *
          FROM clientes
          WHERE nomeCompleto = ?
        `,
        [nomeCompleto],
        (erro, cliente) => {
          if (erro) {
            return reject('Não foi possível encontrar o cliente!');
          }
          return resolve(cliente);
        }
      );
    });
  },

  buscaPorId: id => {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT *
          FROM clientes
          WHERE id = ?
        `,
        [id],
        (erro, cliente) => {
          if ((erro) || (!cliente)) {
            return reject('Não foi possível encontrar o cliente!');
          }
          return resolve(cliente);
        }
      );
    });
  },

  deleta: cliente => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          DELETE FROM clientes
          WHERE id = ?
        `,
        [cliente.id],
        erro => {
          if (erro) {
            return reject('Erro ao deletar o cliente');
          }
          return resolve();
        }
      );
    });
  }

};