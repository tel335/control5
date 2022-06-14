import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import userActions from '../../../src/actions/movies/movies'

/**
 * El objetivo de este test de integración es probar
 * el endpoint para listar todas las movies                          HU1
 */
describe('GET /api/movies', () => {
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

    test('should respond a status 500 if there are no movies', async () => {           //Caso no existan movies
        sinon.stub(moviesActions, 'getAllmovies').returns(getMockMoviesNone())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)                                                                         //Status 500
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })

    test('should respond an array with movies if that data exists', async () => {     //Caso existan movies
        sinon.stub(moviesActions, 'getAllMovies').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies')
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

function getMockMoviesNone(){
    return undefined
}