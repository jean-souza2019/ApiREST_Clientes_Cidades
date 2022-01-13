const db = require('../../database');

module.exports = {
  adiciona: post => {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO posts (
          titulo, 
          conteudo
        ) VALUES (?, ?)
      `,
        [post.titulo, post.conteudo],
        erro => {
          if (erro) {
            return reject('Erro ao adicionar o post!');
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
          FROM posts
          WHERE id = ?
        `,
        [id],
        (erro, post) => {
          if (erro) {
            return reject('Não foi possível encontrar o post!');
          }

          return resolve(post);
        }
      );
    });
  },

  lista: () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM posts`, (erro, resultados) => {
        if (erro) {
          return reject('Erro ao listar os posts!');
        }

        return resolve(resultados);
      });
    });
  },

  deleta: post => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          DELETE FROM posts
          WHERE id = ?
        `,
        [post.id],
        erro => {
          if (erro) {
            return reject('Erro ao deletar o post');
          }
          return resolve();
        }
      );
    });
  }
};
