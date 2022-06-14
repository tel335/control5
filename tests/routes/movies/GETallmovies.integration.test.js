import request from 'supertest'
import {server, app} from '../../../src/index'
import sinon from 'sinon'
import  moviesActions from '../../../src/actions/movies/movies.js'
const { getAllMovies, getMoviesByName } = require('../../../src/actions/movies/movies.js')


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

    test('Si no devuelve data, debe mostrar un mensaje de error con status 500', async () => {
        sinon.stub(moviesActions, 'getAllMovies').returns(getMockMoviesEmpty())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({status: 500, message: 'Hubo un error al mostrar toda la lista'})
    })
    test('Deberia devolver toda la lista de peliculas', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getAllMovies())
    })

    test('En el caso que no existan resultados', async () => {
        let paramName = '/api/movies/:'+ getNameMovie()
        const response = await request(app.callback()).get(paramName)
        expect(response.status).toBe(200)
        expect(response.body).toEqual({status:200, message:'No se han encontrado coincidencias'})
        
    })
    test(' Deberá devolver todas las películas que contengan el parámetro de búsqueda en el título', async () => {
        let paramName = '/api/movies/:'+ getNameMovie()
        const response = await request(app.callback()).get(paramName)
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMoviesByName(getNameMovie()))
    })
})

function getMockMoviesEmpty(){
    return
}

function getNameMovie(){
    return 'The Land Girls'
}

function NameNoExist(){
    return 'kfshgs'
}


