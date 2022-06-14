import { message } from 'koa/lib/response'
import request from 'supertest'
import { Test } from 'supertest'
import { server, app } from '../../../src/index'
import GetMovies from '../../../src/actions/movies/movies'
import sinon from 'sinon'


describe('GET /api/movies/:name', () => {
    afterAll(() => {
        server.close()
    })

    beforeEach( () => {
        sinon.restore()
    })

    test('Deberá devolver todas las películas que contengan el parámetro de búsqueda en el título, status 200.', async () => {
        sinon.stub(GetMovies, 'getMoviesByName').returns(paramsname())
        const response = await request(app.callback()).get('/api/movies/The Land Before Time')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([{"name": "The Land Before Time"}])
    })

    test('En el caso que no existan resultados (arreglo vacío), deberá devolver el mensaje "No se han encontrado coincidencias", con status 200.', async () => {
        sinon.stub(GetMovies, 'getMoviesByName').returns(paramsnamenull())
        const response = await request(app.callback()).get('/api/movies/The12345')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'No se han encontrado coincidencias' })
        //expect(response.body).toEqual([])
    })
})


function paramsname() {
    return [
        {
            name: 'The Land Before Time'
        }
    ]
}

function paramsnamenull() {
    return [
        {
            name: 'The12345'
        }
    ]
}