import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'
import moviesData from '../../../src/dataset/movies.json'

describe('GET /api/movies', () =>{

    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('Deberá devolver toda la lista de películas, en el caso que existan, con status 200.', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesData)
    })

    test('Si no devuelve data, debe mostrar un mensaje de error con status 500.', async () => {
        sinon.stub(moviesActions, 'getAllMovies').returns(getMockMovies())
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(500)
        expect(response.body.message).toEqual('Hubo un error al mostrar toda la lista')
    })


})

function getMockMovies () {
    return undefined
}