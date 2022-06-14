import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'

/**
 * El objetivo de este test de integración es probar
 * el endpoint para listar todas las movies que contengan name                          HU2
 */
describe('GET /api/movies/:name', () => {
    /**
     * beforeEach
     * afterEach
     * beforeAll
     * afterAll
     */
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('should respond an empty array with movies if that data exists', async () => {           //Caso no existan coincidencias
        const response = await request(app.callback()).get('/api/movies/:name')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({"message": "No se han encontrado coincidencias"})
    })

    test('should respond an array with movies if that data exists', async () => {                 //Caso existan coincidencias
        sinon.stub(moviesActions, 'getMoviesByName').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies/:name')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMovies())
    })
})

function getMockMovies() 
{
    return{
        "name": "Braveheart"
    }
}
