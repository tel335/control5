import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import movieActions from '../../../src/actions/movies/movies'
import movies from '../../../src/dataset/movies.json'
const { getAllMovies, getMoviesByName } = require('../../../src/actions/movies/movies.js')

describe('GET /api/movies', () => {

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('Deberá devolver toda la lista de películas, en el caso que existan, con status 200.', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(movies)
    })

    test('Si no devuelve data, debe mostrar un mensaje de error con status 500.', async () => {
        sinon.stub(movieActions, 'getAllMovies').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ status: 500, message: 'Hubo un error al mostrar toda la lista' })
    })

    test('En el caso que no existan resultados (arreglo vacío), deberá devolver el mensaje "No se han encontrado coincidencias", con status 200.', async () => {
        let urlWithName = '/api/movies/no_existe'
        const response = await request(app.callback()).get(urlWithName)
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ status: 200, message: 'No se han encontrado coincidencias' })
    })

    test('Deberá devolver todas las películas que contengan el parámetro de búsqueda en el título, status 200.', async () => {
        let urlWithName = '/api/movies/Dracula'
        const response = await request(app.callback()).get(urlWithName)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMoviesByName('Dracula'))
    })

    function getMockMovies(){
        return
    }
})