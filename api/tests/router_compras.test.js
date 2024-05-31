const supertest = require('supertest');
const app = require('../app');
const { application } = require('express');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
    test('Deve retornar 201 e um JSON no POST /compras', async () =>{
        const response = await request.post('/compras').send({nome: 'camisa', preco: 60.0});
        expect(response.status).toBe(201);
        expect(response.type).toBe('application/json');
        id = response.body._id;
    });

    test('Deve retornar 422 e um JSON? no POST /compras', async () => {
        const response = await request.post("/compras").send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });

    test('Deve retornar 200 e um array no GET /compras', async () => {
        const response = await request.get('/compras');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        if (response.body.length > 0) {
            id = response.body[0]._id.toString();
        }
    });

    test('Deve retornar 200 e um JSON no GET /compras/id', async () => {
        const response = await request.get(`/compras/${id}`);
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
    })

    test('Deve retornar 404 e um JSON no GET /compras/id', async () => {
        const response = await request.get('/compras/<ID ESPECIFICO>');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });

    test('Deve retornar 200 e um JSON no PUT /compras/id', async () => {
        const response = await request.put(`/compras/${id}`).send({ nome: "calça", preco: 245.00 });
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    });

    test('Deve retornar 404 e um JSON no PUT /compras/id', async () => {
        const response = await request.put('/compras/6643eb670a1e917ee0581e85');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });

    test('Deve retornar 422 e um JSON? no PUT /compras', async () => {
        const response = await request.put(`/compras/${id}`).send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });

    test('Deve retornar 204 no DELETE /compras/id', async () => {
        const response = await request.delete(`/compras/${id}`);
        expect(response.status).toBe(204);
        expect(response.type).toBe('');
    });

    test('Deve retornar 404 e um JSON no DELETE /compras/id', async () => {
        const response = await request.delete(`/compras/${id}`);
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});