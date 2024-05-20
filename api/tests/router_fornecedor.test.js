const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

let id = null

describe('API CRUD de Fornecedores', () => {
    
    /*
    * Rotas GET
    */
    test("Deve retornar 200 e um array no GET /fornecedor", async() => {
        const response = await request.get("/fornecedor")
        expect(response.status).toBe(200)
        expect(response.type).toBe("application/json")
        id = response.body.length > 0 ? response.body[0]._id.toString() : null
    }) 
});