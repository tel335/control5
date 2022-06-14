import request from 'supertest'
import { server, app } from '../../../src/index'
import getAllMovies from '../../../src/actions/movies/movies'

/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación entrega una lista de peliculas
 */
describe('GET /api/movies', () => {
    afterAll(() => {
        server.close()
    })

    test('Devolver lista de películas', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getAllMovies.getAllMovies())
        //expect([]).toBe(500)
    })

    test('error', async () => {
        const response = await request(app.callback()).get('/api/movies/falla')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
        //expect(response.body).toEqual({ message: 'error' })
        //expect([]).toBe(500)
    })
})