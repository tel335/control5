import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'


describe('GET /api/movies/name', () => {

    beforeEach(() => {
        sinon.restore()

    })

    afterAll(() => {
        server.close()
    })

    test('Muestra nombre de la pelicula', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns(getMockMoviesByMovie()) 
        const response = await request(app.callback()).get('/api/movies/name')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMockMoviesByMovie())
    })
    
    test('devuelve si no encuentra el nombre de la pelicula', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns([])
        const response = await request(app.callback()).get('/api/movies/3333')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
    })
})

function getMockMoviesByMovie() {
    return [{
        'name' : 'hola'
}]
}

function getFAILMockMovies(){
    return undefined
}
