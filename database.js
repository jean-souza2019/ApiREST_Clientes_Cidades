const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');

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
    nome VARCHAR(40) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senhaHash VARCHAR(255) NOT NULL
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
