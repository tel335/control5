

import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesActions from '../../../src/actions/movies/movies'
/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */


describe('GET /api/movies/rating/:classifier/:order', () => {
    afterAll(() => {
        server.close()
    })

    beforeAll(() => {
        server.close()
    })
    test('should respond ok message /api/movies/rating/imdb/asc', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier("imdb","asc"))
    })
    test('should respond ok message /api/movies/rating/imdb/desc', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier("imdb","desc"))
    })
    
    test('should respond ok message /api/movies/rating/rotten/asc', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier("rotten","asc"))
    })
    test('should respond ok message /api/movies/rating/rotten/asc', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier("rotten","desc"))
    })

    test('should respond ok message /api/movies/rating/imrotten/asc', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imrotten/asc')
        expect(response.status).toBe(500)
        expect(response.body.message).toEqual('Hubo un error al mostrar toda la lista')
    })
    test('should respond ok message /api/movies/rating/imdb/acs', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/acs')
        expect(response.status).toBe(500)
        expect(response.body.message).toEqual('Hubo un error al mostrar toda la lista')
    })

})

