const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 204 no DELETE /compras/id', async () => {
        const response = await request.delete(`/compras/665a6326967438467b4423cf`);
        expect(response.status).toBe(204);
        expect(response.type).toBe('');
    });
});