const request = require('supertest')
const server = require('./server')

test('Teste de servidor', async () => {
    const res = await request(app).get('/')


    expect(res.statusCode).toEqual(200)
    expect(resd.body).toHaveProperty('message')
})