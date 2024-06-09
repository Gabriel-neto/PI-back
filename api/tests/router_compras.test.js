const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 200 e um JSON no GET /compras/id', async () => {
        const response = await request.get(`/compras/665a63b7680c5a780f106f4d`);
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
    });
});