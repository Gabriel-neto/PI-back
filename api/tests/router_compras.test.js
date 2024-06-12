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
    test('Deve retornar 200 e um array no GET /compras', async () => {
        const response = await request.get('/compras');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        if (response.body.length > 0) {
            id = response.body[0]._id.toString();
        }
    });
    test('Deve retornar 200 e um JSON no GET /compras/id', async () => {
        const response = await request.get(`/compras/665a63b7680c5a780f106f4d`);
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
    });
    test('Deve retornar 200 e um JSON no GET /compras/id', async () => {
        const response = await request.get(`/compras/665a63b7680c5a780f106f70`);
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json')
    });
	test('Deve retornar 200 e um JSON no PUT /compras/id', async () => {
        const response = await request.put(`/compras/665a63b7680c5a780f106f4d`).send({ produto: "calça", preco: 245.00 });
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
    });
    test('Deve retornar 404 e um JSON no PUT /compras/id', async () => {
        const response = await request.put('/compras/6643eb670a1e917ee0581e85');
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
    test('Deve retornar 422 e um JSON no PUT /compras/id', async () => {
        const response = await request.put(`/compras/665a631e5e070c9ab9b7960a`).send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });
    test('Deve retornar 422 e um JSON no POST /compras', async () => {
        const response = await request.post('/compras').send({});
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
    });
    test('Deve retornar 204 no DELETE /compras/id', async () => {
        const response = await request.delete(`/compras/665a6326967438467b4423cf`);
        expect(response.status).toBe(204);
        expect(response.type).toBe('');
    });
    test('Deve retornar 404 e um JSON no DELETE /compras/id', async () => {
        const response = await request.delete(`/compras/665a632637fc04dca9991670`);
        expect(response.status).toBe(404);
        expect(response.type).toBe('application/json');
    });
});