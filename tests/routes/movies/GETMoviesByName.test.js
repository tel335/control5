
import request from 'supertest'
import { server, app } from '../../../src/index'

import moviesActions from '../../../src/actions/movies/movies'
/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */

describe('GET /api/movies/:name', () => {
    afterAll(() => {
        server.close()
    })
    
    test('should respond ok message to find pirates /api/movies/pirates', async () => {
        const response = await request(app.callback()).get('/api/movies/pirates')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByName('pirates'))
    })

    test('should respond ok message to find PIRATES wiouth case sensitive /api/movies/PIRATES', async () => {
        const response = await request(app.callback()).get('/api/movies/PIRATES')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByName('PIRATES'))
    })
    
    test('should respond status 500 with message error to not found sfsdafsed /api/movies/sfsdafsed', async () => {
        const response = await request(app.callback()).get('/api/movies/sfsdafsed')
        expect(response.status).toBe(200)
        expect(response.body).toEqual([])
    })

})

