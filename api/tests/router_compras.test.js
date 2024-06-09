const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let id = null

describe('API BlackBox', () => {
   test('Deve retornar 200 e um array no GET /compras', async () => {
        const response = await request.get('/compras');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        if (response.body.length > 0) {
            id = response.body[0]._id.toString();
        }
    });  
});