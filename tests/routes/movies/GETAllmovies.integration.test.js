import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesData from '../../../src/dataset/movies.json'
import moviesActions from '../../../src/actions/movies/movies' 
import sinon from 'sinon'

describe('GET /GETAllmovies', () => {
    afterAll(() => {
        server.close()
    })

    test('debería devolver toda la lista de peliculas, en status OK', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesData)
    })

    test('deberia no devolver data, con status 500', async () => {
        sinon.stub(moviesActions,'getAllMovies').returns()
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })
})
