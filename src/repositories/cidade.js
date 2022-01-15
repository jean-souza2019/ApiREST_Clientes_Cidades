const db = require('../../database/config');
const { InternalServerError } = require('../utils/errors');

module.exports = {
  adiciona: ({ nome, estado }) => {
    return new Promise((resolve, reject) => {
      db.get(
        `
        INSERT INTO cidades (
          nome, 
          estado
        ) VALUES (?, ?);
      `,
        [nome, estado],
        (erro, row) => {
          if (erro) {
            return reject(new InternalServerError('Erro ao adicionar o cidade!' + erro));
          }

          return resolve(row);
        }
      );
    });
  },

  buscaPorNome: nome => {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT *
          FROM cidades
          WHERE nome = ?
        `,
        [nome],
        (erro, cidade) => {
          if (erro) {
            return reject('Não foi possível encontrar a cidade!');
          }
          return resolve(cidade);
        }
      );
    });
  },

  buscaPorEstado: estado => {
    return new Promise((resolve, reject) => {
      db.all(
        `
          SELECT *
          FROM cidades
          WHERE estado = ?
        `,
        [estado],
        (erro, cidades) => {
          if (erro) {
            return reject('Não foi possível encontrar o estado!');
          }
          return resolve(cidades);
        }
      );
    });
  }
  
};