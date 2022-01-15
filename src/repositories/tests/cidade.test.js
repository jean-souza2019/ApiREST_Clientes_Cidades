const cidadeRepository = require('../cidade')

describe('Repositories cidade teste', () => {
    it('Teste Buscar Cidade Pelo Nome', async () => {
        const cidade = await cidadeRepository.buscaPorNome("Criciuma");
        expect(cidade.estado).toBe("Santa Catarina");
    });
});
