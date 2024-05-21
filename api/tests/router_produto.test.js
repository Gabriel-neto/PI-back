const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

const produto = {
  nome: "banana",
  grupo: "frutas",
  preco: 12.0,
  quantidade: 5,
};

describe("API", () => {
  test("Deve retornar 201 e um JSON no POST /produtos", async () => {
    const response = await request.post("/produtos").send(produto);
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    id = response.body._id;
    console.log(id);
  });
  
  test("Deve retornar 422 e um JSON no POST /produtos", async () => {
    const response = await request.post("/produtos").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });
});
