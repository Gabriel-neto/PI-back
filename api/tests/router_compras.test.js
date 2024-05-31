const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 201 e um JSON no POST /compras', async () =>{
        const response = await request.post('/compras').send({ 
            produto: 'CAMISA',
            preco: 60.0,
            quantidade: 10,
            data: "2024-05-31",
            vendedor: 'VENDEDOR X',
            nf: 123456
        });
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        id = response.body._id;
    });
});