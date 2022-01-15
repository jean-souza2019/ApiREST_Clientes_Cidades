const supertest = require('supertest')
const app = require('../../../app')

describe('Testando as rotas do cliente', () => {

    it('Consultando cidade por ID', async () => {
        await supertest(app)
            .get('/cliente/id/' + encodeURI('1'))
            .expect(200)
            .set('Content-Type', 'application/json')
            .then(response => {
                expect(response.body.id).toEqual(1);
                expect(response.body.nomeCompleto).toEqual('Jean Marcos de Souza');
                expect(response.body.sexo).toEqual('M');
                expect(response.body.dataNascimento).toEqual('1999-01-01');
                expect(response.body.idade).toEqual(22);
                expect(response.body.cidade).toEqual('Passo fundo');
            })
    })
});
