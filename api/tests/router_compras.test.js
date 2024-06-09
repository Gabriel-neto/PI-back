const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 404 e um JSON no PUT /compras/id', async () => {
        const response = await request.put('/compras/6643eb670a1e917ee0581e85');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});