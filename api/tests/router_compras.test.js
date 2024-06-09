const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 422 e um JSON no PUT /compras/id', async () => {
        const response = await request.put(`/compras/665a631e5e070c9ab9b7960a`).send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });
});