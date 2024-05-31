const supertest = require('supertest');
const app = require('../app');
const { application } = require('express');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 404 e um JSON no GET /compras', async () => {
        const response = await request.get('/compras');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
        if (response.body.length > 0) {
            id = response.body[0]._id.toString();
        }
    });
});