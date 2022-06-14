import movies from '../../../src/actions/movies/movies';
import sinon from 'sinon';
import request from 'supertest';
import { server, app } from '../../../src/index'

describe("GET /api/movies/rating/:classifier/:order", () => {
    beforeEach(() => {
        sinon.restore();
    });

    afterAll(() => {
        server.close();
    });

    test("getMoviesByClassifier retorna nulo si algun parametro no es correcto", async () => {
        const response1 = await request(app.callback()).get("/api/movies/rating/rotten/what");
        const response2 = await request(app.callback()).get("/api/movies/rating/what/desc");
        expect(response1.status).toBe(500);
        expect(response2.status).toBe(500);
    });

    test("Deberá responder con una lista de valores en el orden descendiente segun su puntaje de imdb", async() => {
        const bond = sinon.spy(movies, 'getMoviesByClassifier');
        const response = await request(app.callback()).get("/api/movies/rating/imdb/desc");
        expect(response.status).toBe(200);
        expect(bond.getCall(0).args).toEqual(['imdb','desc']);
    });

    test("Deberá responder con una lista de valores en el orden ascendiente segun su puntaje de imdb", async() => {
        const bond = sinon.spy(movies, 'getMoviesByClassifier');
        const response = await request(app.callback()).get("/api/movies/rating/imdb/asc");
        expect(response.status).toBe(200);
        expect(bond.getCall(0).args).toEqual(['imdb','asc']);
    });

    test("Deberá responder con una lista de valores en el orden descendiente segun su puntaje de rotten tomatos", async() => {
        const bond = sinon.spy(movies, 'getMoviesByClassifier');
        const response = await request(app.callback()).get("/api/movies/rating/rotten/desc");
        expect(response.status).toBe(200);
        expect(bond.getCall(0).args).toEqual(['rotten','desc']);
    });

    test("Deberá responder con una lista de valores en el orden ascendiente segun su puntaje de rotten tomatos", async() => {
        const bond = sinon.spy(movies, 'getMoviesByClassifier');
        const response = await request(app.callback()).get("/api/movies/rating/rotten/asc");
        expect(response.status).toBe(200);
        expect(bond.getCall(0).args).toEqual(['rotten','asc']);
    });
})