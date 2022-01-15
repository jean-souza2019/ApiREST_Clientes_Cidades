const db = require('../../database/config');
const { InternalServerError } = require('../utils/errors');

module.exports = {
  adiciona: ({ nomeCompleto, sexo, dataNascimento, idade, cidade }) => {
    return new Promise((resolve, reject) => {
      db.get(
        `
          INSERT INTO clientes (
            nomeCompleto,
            sexo,
            dataNascimento,
            idade,
            cidade
          ) VALUES (?, ?, ?, ?, ?);
        `,
        [nomeCompleto, sexo, dataNascimento, idade, cidade],
        (erro, row) => {
          if (erro) {
            reject(new InternalServerError('Erro ao adicionar o cliente!' + erro));
          }

          return resolve(row);
        }
      );
    });
  },

  atualiza: ({ nomeCompleto, id }) => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          UPDATE clientes
          SET nomeCompleto = ?
          WHERE id = ?
        `,
        [nomeCompleto, id],
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
            reject('Não foi possível encontrar o cliente!');
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