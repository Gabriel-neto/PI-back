const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 404 e um JSON no DELETE /compras/id', async () => {
        const response = await request.delete(`/compras/665a632637fc04dca9991670`);
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});