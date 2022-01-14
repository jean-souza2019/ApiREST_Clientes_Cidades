const db = require('../../database');

module.exports = {
  adiciona: cidade => {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO cidades (
          nome, 
          estado
        ) VALUES (?, ?)
      `,
        [cidade.nome, cidade.estado],
        erro => {
          if (erro) {
            return reject('Erro ao adicionar a cidade!');
          }

          return resolve();
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