import request from "supertest";

import app from "../app";
import { cheeses } from "../models";
import * as cheeseService from "../services/cheese.service";

describe("GET cheeses", () => {
  it("Should return a status of 200 and a valid response", async () => {
    const res = await request(app)
      .get("/cheeses")
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    expect(res.body).toEqual(cheeses);
  });

  it("Should return a status of 500 and an error message if the request fails", async () => {
    const errorMessage = "Sorry, we ran into an error";

    jest.spyOn(cheeseService, "getAll").mockImplementation(() => {
      throw new Error(errorMessage);
    });
    await request(app).get("/cheeses").expect(500).expect(errorMessage);
  });
});

describe("POST Cheeses", () => {
  it("Should return a status of 200 and a successful cheese object", async () => {
    const cheese = {
      name: "test_cheese",
      colour: "Golden Orange",
      image: "https://cheese.com/media/img/cheese/Adelost_QnxYLx6.jpg",
      price: 1005,
    };

    const res = await request(app)
      .post("/cheeses")
      .send(cheese)
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    expect(res.body.id).toBeTruthy();
    expect(res.body).toEqual({ id: res.body.id, ...cheese });
  });

  it("Should return an error array if name is not provided", async () => {
    const cheese = {
      colour: "Golden Orange",
      image: "https://cheese.com/media/img/cheese/Adelost_QnxYLx6.jpg",
      price: 1005,
    };

    await request(app)
      .post("/cheeses")
      .send(cheese)
      .set("Accept", "application/json")
      .expect(400)
      .expect({
        name: "ValidationError",
        message: "ValidationError - invalid data provided",
        status: 400,
        errors: [
          "name must have a minimum length of 2 and a maximum length of 25",
        ],
      });
  });
});

describe("PATCH cheeses", () => {
  it("Should receive a status of 200 and an updated Cheese object when patching a name", async () => {
    const cheese = {
      name: "test1234",
    };

    const res = await request(app)
      .patch(`/cheeses/1`)
      .send(cheese)
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
    expect(res.body.id).toBeTruthy();
    expect(res.body.name).toEqual("test1234");
  });

  it("Should receive a 404 if the item does not exist", async () => {
    const cheese = {
      name: "test1234",
    };

    const res = await request(app)
      .patch(`/cheeses/aerkg9aekrga9e-rgkae-9gkae-r9gkeaadawdawdwada`)
      .send(cheese)
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(404);
  });

  it("Should receive a bad request if body is empty", async () => {
    const res = await request(app)
      .patch(`/cheeses/1`)
      .send()
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(400);
  });
});

describe("DELETE cheeses", () => {
  it("Should receive a 204 success when deleting a cheese", async () => {
    const res = await request(app)
      .delete(`/cheeses/1`)
      .send()
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(204);
  });

  it("Should receive a 404 when attempting to delete a cheese that doesn't exist", async () => {
    const res = await request(app)
      .delete(`/cheeses/5555-5-5-5-5-ae-az-z-`)
      .send()
      .set("Accept", "application/json");
    expect(res.statusCode).toEqual(404);
  });
});
