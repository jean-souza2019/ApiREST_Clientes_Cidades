const sqlite3 = require('sqlite3').verbose();
const dbName = process.env.DB_NAME ? process.env.DB_NAME : 'db.sqlite';
const db = new sqlite3.Database(dbName);

const CIDADES_SCHEMA = `
  CREATE TABLE IF NOT EXISTS cidades (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL
  )
  `;

const CLIENTES_SCHEMA = `
  CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nomeCompleto VARCHAR(255) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    dataNascimento date NOT NULL,
    idade INTEGER NOT NULL,
    cidade VARCHAR(255) NOT NULL
  )
  `;

db.serialize(() => {
  db.run('PRAGMA foreign_keys=ON');
  db.run(CIDADES_SCHEMA);
  db.run(CLIENTES_SCHEMA);
});

process.on('SIGINT', () =>
  db.close(() => {
    process.exit(0);
  })
);

module.exports = db;