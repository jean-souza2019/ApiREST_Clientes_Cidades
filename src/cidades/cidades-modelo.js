const cidadesDao = require('./cidades-dao');
const validacoes = require('../validacoes-comuns');

class Cidade {
  constructor(cidade) {
    this.id = cidade.id;
    this.nome = cidade.nome;
    this.estado = cidade.estado;
    this.valida();
  }

  adiciona() {
    return cidadesDao.adiciona(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.nome, 'nome');
    validacoes.campoTamanhoMaximo(this.nome, 'nome', 255);
    validacoes.campoStringNaoNulo(this.estado, 'estado');
    validacoes.campoTamanhoMaximo(this.estado, 'estado', 255);
  }

  static async buscaPorNome(nome) {
    const cidade = await cidadesDao.buscaPorNome(nome);
    if (!cidade) {
      return null;
    }
    return new Cidade(cidade);
  }

  static async buscaPorEstado(estado) {
    const cidade = await cidadesDao.buscaPorEstado(estado);
    if (!cidade) {
      return null;
    }
    return cidade;
  }
}

module.exports = Cidade;