import request from 'supertest'
import { Test } from 'supertest'
import { server, app } from '../../../src/index'
import GetMovies from '../../../src/actions/movies/movies'
import sinon from 'sinon'

const movies = GetMovies.getAllMovies()

describe('GET /api/movies', () => {
    afterAll(() => {
        server.close()
    })

    beforeEach( () => {
        sinon.restore()
    })

    test('Deberá devolver toda la lista de películas, en el caso que existan, con status 200.', async () => {
        //sinon.stub(ctx, 'GETAllMovies').returns(ctx)
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(movies)
    })

    test('Si no devuelve data, debe mostrar un mensaje de error con status 500.', async () => {
        sinon.stub(GetMovies, 'getAllMovies').returns(nohaydata())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body).toEqual(nohaydata)
    })
})

function nohaydata() {
    return []
}