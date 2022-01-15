const request = require('supertest')
const app = require('./app')

test('Teste de servidor', async ()=>{
    const res = await request(app).get('/')


    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
})