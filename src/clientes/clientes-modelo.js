const clientesDao = require('./clientes-dao');
const { InvalidArgumentError } = require('../erros');
const validacoes = require('../validacoes-comuns');

class Cliente {
  constructor(cliente) {
    this.id = cliente.id;
    this.nomeCompleto = cliente.nomeCompleto;
    this.sexo = cliente.sexo;
    this.dataNascimento = cliente.dataNascimento;
    this.idade = cliente.idade;
    this.cidade = cliente.cidade;

    this.valida();
  }

  async adiciona() {
    if (await Cliente.buscaPorNome(this.nomeCompleto)) {
      throw new InvalidArgumentError('O cliente já existe!');
    }
    return clientesDao.adiciona(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.nomeCompleto, 'nomeCompleto');
    validacoes.campoStringNaoNulo(this.sexo, 'sexo');
    // validacoes.campoStringNaoNulo(this.dataNascimento, 'dataNascimento');
    // validacoes.campoStringNaoNulo(this.idade, 'idade');
    validacoes.campoStringNaoNulo(this.cidade, 'cidade');
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

  static async buscaPorNome(nomeCompleto) {
    return clientesDao.buscaPorNome(nomeCompleto);
  }

}

module.exports = Cliente;