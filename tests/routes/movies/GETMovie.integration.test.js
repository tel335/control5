import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import movieActions from '../../../src/actions/movies/movies'

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

    test('return de todas las peliculas', async () => {
        
        sinon.stub(movieActions, 'getAllMovies').returns(getMock())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMock())
    })

    test('return error si la url no corresponde a la pasada', async () => {
        
        sinon.stub(movieActions, 'getAllMovies').returns(getMock())
        const response = await request(app.callback()).get('/api/movie')
        expect(response.status).toBe(404)
        expect(response.body).toEqual({})
    })
})

function getMock () {
    const allMovies = require('../../../src/dataset/movies.json')
    return [
        allMovies
    ]
}