import sinon from 'sinon'
import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesActions from '../../../src/actions/movies/movies'
//import data from '../../../src/actions/dataset/movies'
const jsonMovies= require('../../../src/dataset/movies.json'); 

describe('GET /api/movies/rating', () => {
    /**
     * beforeEach-> antes de cada test
     * afterEach > despues de cada test
     * beforeAll ->antes de todos lo test
     * afterAll -> despues de todo test
     */
    beforeEach(() => {
        sinon.restore()//renovar el estado del sinon para que no quede con ningun dato que pueda afectar el test que viene después
    })

    afterAll(() => {
        server.close()
    })

    test('Arreglo vacio si no hay peliculas', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ message: 'Hubo un error al mostrar toda la lista' })
    })

    test('arreglo con peliculas', async () => {
        
    
        sinon.stub(moviesActions, 'getAllMovies').returns(jsonMovies)
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getAllMovies())
    })
})