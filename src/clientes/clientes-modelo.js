const clientesDao = require('./clientes-dao');
const { InvalidArgumentError } = require('../erros');
const validacoes = require('../validacoes-comuns');
const bcrypt = require('bcrypt');

class Cliente {
  constructor(cliente) {
    this.id = cliente.id;
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.senhaHash = cliente.senhaHash;

    this.valida();
  }

  async adiciona() {
    if (await Cliente.buscaPorEmail(this.email)) {
      throw new InvalidArgumentError('O cliente já existe!');
    }

    return clientesDao.adiciona(this);
  }


  async adicionaSenha(senha) {
    validacoes.campoStringNaoNulo(senha, 'senha');
    validacoes.campoTamanhoMinimo(senha, 'senha', 8);
    validacoes.campoTamanhoMaximo(senha, 'senha', 64);
    this.senhaHash = await Cliente.gerarSenhaHash(senha);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.nome, 'nome');
    validacoes.campoStringNaoNulo(this.email, 'email');
  }


  async deleta() {
    return clientesDao.deleta(this);
  }

  static async buscaPorId(id) {
    const cliente = await clientesDao.buscaPorId(id);
    if (!cliente) {
      return null;
    }

    return new Cliente(cliente);
  }

  static async buscaPorEmail(email) {
    const cliente = await clientesDao.buscaPorEmail(email);
    if (!cliente) {
      return null;
    }

    return new Cliente(cliente);
  }

  static lista() {
    return clientesDao.lista();
  }

  static gerarSenhaHash(senha) {
    const custoHash = 12;
    return bcrypt.hash(senha, custoHash);
  }
}

module.exports = Cliente;
