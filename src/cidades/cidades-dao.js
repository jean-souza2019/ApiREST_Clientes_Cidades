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

  buscaPorId: id => {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT *
          FROM cidades
          WHERE id = ?
        `,
        [id],
        (erro, cidade) => {
          if (erro) {
            return reject('Não foi possível encontrar a cidade!');
          }

          return resolve(cidade);
        }
      );
    });
  },

  lista: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM cidades`, (erro, resultados) => {
        if (erro) {
          return reject('Erro ao listar as cidade!');
        }

        return resolve(resultados);
      });
    });
  },

  deleta: cidade => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          DELETE FROM cidades
          WHERE id = ?
        `,
        [cidade.id],
        erro => {
          if (erro) {
            return reject('Erro ao deletar a cidade');
          }
          return resolve();
        }
      );
    });
  }
};
