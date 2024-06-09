const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 200 e um JSON no PUT /compras/id', async () => {
        const response = await request.put(`/compras/665a63b7680c5a780f106f4d`).send({ produto: "calça", preco: 245.00 });
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    });
});