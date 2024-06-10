const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 422 e um JSON no POST /compras', async () => {
        const response = await request.post('/compras').send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });
});