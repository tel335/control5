import request from 'supertest'
import { server, app } from '../../../src/index'
import filteredMovies from '../../../src/actions/movies/movies'
import getErrorResponseNuevo from '../../../src/utils/responseBuilder'

describe('GET /GETMoviesByName', () => {
    afterAll(() => {
        server.close()
    })

    test('debería devolver todas la lista de peliculas que contengan el parametro de busqueda en el titulo, en status OK', async () => {
        const response = await request(app.callback()).get('/api/movies/The Land Girls') 
        expect(response.status).toBe(200)
        expect(Object.keys(response.body).length).toEqual(1)
    })
    
    test('debería devolver un mensaje no se han encontrado coincidencias, con status 200 ', async () => {
        const response = await request(app.callback()).get('/api/movies/akjsfka') 
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ status: 200, message: 'No se encontraron coincidencias' })
    })
})