const clienteRepository = require('../cliente')

describe('Repositories cliente teste', () => {
    it('Teste Buscar Cliente Pelo Nome', async () => {
        const cliente = await clienteRepository.buscaPorNome("Jean Marcos de Souza");
        expect(cliente.cidade).toBe("Passo fundo");
    });

    it('Teste Buscar Cliente Pelo ID', async () => {
        const cliente = await clienteRepository.buscaPorId(1);
        expect(cliente.nomeCompleto).toBe("Jean Marcos de Souza");
    });
});


