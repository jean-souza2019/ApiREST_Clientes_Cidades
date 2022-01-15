const clienteRepositori = require('../cliente')

describe('Repositories cliente teste', () => {
    it('Teste Buscar Cliente Pelo Nome', async () => {
        const cliente = await clienteRepositori.buscaPorNome("Jean Marcos de Souza");
        expect(cliente.cidade).toBe("Passo fundo");
    });

    it('Teste Buscar Cliente Pelo ID', async () => {
        const cliente = await clienteRepositori.buscaPorId(1);
        expect(cliente.nomeCompleto).toBe("Jean Marcoss3");
    });

});


