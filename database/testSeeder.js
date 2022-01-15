const dbTest = require('./config');
const clienteRepository = require('../src/repositories/cliente')
const cidadeRepository = require('../src/repositories/cidade')

run = async () => {
    try {
        const cidade = await cidadeRepository.adiciona({
            nome: 'Criciuma',
            estado: 'Santa Catarina'
        });
    } catch (e) {
        console.log('error on insert cidade', e);
    }

    try {
        const cliente = await clienteRepository.adiciona({
            nomeCompleto: 'Jean Marcos de Souza',
            sexo: 'M',
            dataNascimento: '1999-01-01',
            idade: 22,
            cidade: 'Passo fundo'
        });
    } catch (e) {
        console.log('error on insert cliente', e);
    }
}
run();