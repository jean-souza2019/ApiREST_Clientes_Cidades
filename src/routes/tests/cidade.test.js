const supertest = require('supertest')
const app = require('../../../app')

describe('Testando as rotas da cidade', () => {
    it('Inserindo cidade', async () => {
        await supertest(app)
            .post('/cidade')
            .send(JSON.stringify({ nome: 'Aragua', estado: 'SC' }))
            .expect(201)
            .set('Content-Type', 'application/json')
            .then(response => {
                expect(response.body.nome).toEqual('Aragua');
                expect(response.body.estado).toEqual('SC');
            })
    });

    it('Inserindo cidade', async () => {
        await supertest(app)
            .get('/cidade/' + encodeURI('Aragua'))
            .expect(200)
            .set('Content-Type', 'application/json')
            .then(response => {
                expect(response.body.nome).toEqual('Aragua');
                expect(response.body.estado).toEqual('SC');
            })
    })
});
