const clienteRepository = require('../repositories/cliente');
const { InvalidArgumentError } = require('../utils/errors');
const validacoes = require('../utils/validations');

class Cliente {
  constructor(cliente) {
    this.id = cliente.id;
    this.nomeCompleto = cliente.nomeCompleto;
    this.sexo = cliente.sexo;
    this.dataNascimento = cliente.dataNascimento;
    this.idade = cliente.idade;
    this.cidade = cliente.cidade;

  }

  async adiciona() {
    if (await Cliente.buscaPorNome(this.nomeCompleto)) {
      throw new InvalidArgumentError('Este cliente já existe!');
    }
    this.valida();
    return clienteRepository.adiciona(this);
  }

  async atualiza() {
    if (!await Cliente.buscaPorId(this.id)) {
      return InvalidArgumentError(`ID ${id} não existente!`);
    }
    return clienteRepository.atualiza(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.nomeCompleto, 'nomeCompleto');
    validacoes.campoStringNaoNulo(this.sexo, 'sexo');
    validacoes.campoStringNaoNulo(this.dataNascimento, 'dataNascimento');
    validacoes.campoStringNaoNulo(this.idade, 'idade');
    validacoes.campoStringNaoNulo(this.cidade, 'cidade');
  }


  async deleta() {
    if (!await Cliente.buscaPorId(this.id)) {
      throw new InvalidArgumentError(`ID ${id} não existente!`);
    }
    return clienteRepository.deleta(this);
  }

  static async buscaPorId(id) {
    const cliente = await clienteRepository.buscaPorId(id);
    if (!cliente) {
      return null;
    }
    return new Cliente(cliente);
  }

  static async buscaPorNome(nomeCompleto) {
    return clienteRepository.buscaPorNome(nomeCompleto);
  }

}

module.exports = Cliente;