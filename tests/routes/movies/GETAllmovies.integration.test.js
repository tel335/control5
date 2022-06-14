import movies from '../../../src/actions/movies/movies';
import sinon from 'sinon';
import request from 'supertest';
import { server, app } from '../../../src/index'

describe("GET /api/movies", () => {
    beforeEach(() => {
        sinon.restore();
    });

    afterAll(() => {
        server.close();
    });


    test("Deberá devolver toda la lista de películas, en el caso que existan, con status 200", async () => {
        const response = await request(app.callback()).get('/api/movies');
        expect(response.status).toBe(200);
    });

    test("Deberia devolver un mensaje de error con status 500 si no hay peliculas", async () => {
        sinon.stub(movies, 'getAllMovies').returns(null); //El caso donde no hay peliculas
        const response = await request(app.callback()).get('/api/movies');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({ status: 500, message: 'Hubo un error al mostrar toda la lista' });
    });
});