const db = require('../../database');
const { InternalServerError } = require('../erros');

module.exports = {
  adiciona: cliente => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          INSERT INTO clientes (
            nome,
            email,
            senhaHash
          ) VALUES (?, ?, ?)
        `,
        [cliente.nome, cliente.email, cliente.senhaHash],
        erro => {
          if (erro) {
            reject(new InternalServerError('Erro ao adicionar o cliente!'));
          }

          return resolve();
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
          if (erro) {
            return reject('Não foi possível encontrar o cliente!');
          }

          return resolve(cliente);
        }
      );
    });
  },

  buscaPorEmail: email => {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT *
          FROM clientes
          WHERE email = ?
        `,
        [email],
        (erro, cliente) => {
          if (erro) {
            return reject('Não foi possível encontrar o cliente!');
          }

          return resolve(cliente);
        }
      );
    });
  },

  lista: () => {
    return new Promise((resolve, reject) => {
      db.all(
        `
          SELECT * FROM clientes
        `,
        (erro, cliente) => {
          if (erro) {
            return reject('Erro ao listar clientes');
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
