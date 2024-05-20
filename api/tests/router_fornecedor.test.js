const supertest = require('supertest');

const app = require('../app');

const request = supertest(app);

let id = null

const jsonFornecedor = {
    nome: "Eduardo",
    empresa: "Teste",
    cnpj: "11.111.111/0001-11",
    email: "teste@teste.com",
    telefone: "61 9 3333-3333",
}

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

    test("Deve retornar 200 e um JSON no GET /fornecedor/id", async() => {
        const response = await request.get(`/fornecedor/${id}`)
        expect(response.status).toBe(200)
        expect(response.type).toBe("application/json")
    })

    test("Deve retornar 404 e um JSON no GET /fornecedor/id", async() => {
        const response = await request.get(`/fornecedor/6628518ffa69592ab3c3e2c9`)
        expect(response.status).toBe(404)
        expect(response.type).toBe("application/json")
    })

    /*
    * Rotas POST
    */
    test("Deve retornar 201 e um JSON no POST /fornecedor", async() => {
        const response = await request.post("/fornecedor").send(jsonFornecedor)
        expect(response.status).toBe(201)
        expect(response.type).toBe("application/json")
        id = id ?? null
    })

    test("Deve retornar 422 e um JSON no POST /fornecedor", async() => {
        const response = await request.post("/fornecedor").send({})
        expect(response.status).toBe(422)
        expect(response.type).toBe("application/json")
    })

}); 