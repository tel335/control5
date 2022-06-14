import movies from '../../../src/actions/movies/movies';
import sinon from 'sinon';
import request from 'supertest';
import { server, app } from '../../../src/index'

describe("GET /api/movie/:name", () => {
    beforeEach(() => {
        sinon.restore();
    });
    afterAll(() => {
        server.close();
    });

    test("Deberá devolver todas las películas que contengan el parámetro de búsqueda en el título, status 200", async () => {
        const param = 'dummy';
        sinon.stub(movies, 'getMoviesByName').returns(getMockMovie());
        const response = await request(app.callback()).get(`/api/movies/${param}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(getMockMovie());
    });

    test("Deberá devolver el mensaje de error, con status 200", async () => {
        const param = 'MACKOWDMKOWNCFMODJWNCIOWNCFOJNWOICDN';
        const response = await request(app.callback()).get(`/api/movies/${param}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({status: 200, message: 'No se han encontrado coincidencias'});
    });

    test("Deberá devolver el mensaje de error, con status 500", async () => {
        const param = 'param';
        sinon.stub(movies, 'getMoviesByName').returns(null);
        const response = await request(app.callback()).get(`/api/movies/${param}`);
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ status: 500, message: 'Hubo un error al mostrar toda la lista' });
    })
});


function getMockMovie(){
    return [{"Title": "Dummy Movie", "US Gross": 0, "Worldwide Gross": 0, "US DVD Sales": null, "Production Budget": 0, "Release Date": "Jun 13 2022", "MPAA Rating": "PG", "Running Time min": null, "Distributor": "Dummy", "Source": null, "Major Genre": null, "Creative Type": null, "Director": null, "Rotten Tomatoes Rating": 98, "IMDB Rating": 9.9, "IMDB Votes": 999}];
}