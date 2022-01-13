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

  static lista() {
    return cidadesDao.lista();
  }


  async deleta() {
    return cidadesDao.deleta(this);
  }

  static async buscaPorId(id) {
    const cidade = await cidadesDao.buscaPorId(id);
    if (!cidade) {
      return null;
    }

    return new Cidade(cidade);
  }
}

module.exports = Cidade;
