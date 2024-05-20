const supertest = require("supertest");

const app = require("../app");

const request = supertest(app);

describe("API", () => {
  test("Deve retornar 201 e um JSON no POST /produtos", async () => {
    const response = await request
      .post("/produtos")
      .send({
        nome: "banana",
        grupo: "frutas",
        preco: 12.0,
        quantidade: 5,
      });
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    id = response.body._id;
    console.log(id);
  });
});
