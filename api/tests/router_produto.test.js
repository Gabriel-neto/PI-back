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
  /*test("Deve retornar 201 e um JSON no POST /produtos", async () => {
    const response = await request.post("/produtos").send(produto);
    expect(response.status).toBe(201);
    expect(response.type).toBe("application/json");
    id = response.body._id;
    console.log(id);
});*/

  test("Deve retornar 422 e um JSON no POST /produtos", async () => {
    const response = await request.post("/produtos").send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 200 e um array no GET /produtos", async () => {
    const response = await request.get("/produtos");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    if (response.body.length > 0) {
      id = response.body[0]._id.toString();
    }
  });

  test("Deve retornar 200 e um JSON no GET /produtos/id", async () => {
    const response = await request.get(`/produtos/${id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no GET /produtos/id", async () => {
    const response = await request.get(`/produtos/665a1e48654f3d6eb5fe27be`);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 200 e um JSON no PUT /produtos/id", async () => {
    const response = await request.put(`/produtos/${id}`).send(produto);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 404 e um JSON no PUT /produtos/id", async () => {
    const response = await request.put(`/produtos/664cd331dc5fff3`);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 422 e um JSON no PUT /produtos", async () => {
    const response = await request.put(`/produtos/${id}`).send({});
    expect(response.status).toBe(422);
    expect(response.type).toBe("application/json");
  });

  test("Deve retornar 204 no DELETE /produto/id", async () => {
    const response = await request.delete(`/produto/${id}`);
    expect(response.status).toBe(204);
    expect(response.type).toBe("");
  });

  test("Deve retornar 404 no DELETE /produto/id", async () => {
    const response = await request.delete(`/produto/6628518ffa69592ab3c3e2c2`);
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
  });
});
