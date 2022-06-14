import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesA from '../../../src/actions/movies/movies'



///api/movies/rating/:classifier/:order
describe('GET /api/movies/rating/:classifier/:order', () => {

    afterAll(() => {
        server.close()
    })

    test('Devolver la lista ascendente IMDB', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesA .getMoviesByClassifier('imdb', 'asc'))

        
    })

})

describe('GET /api/movies/rating/:classifier/:order', () => {

    afterAll(() => {
        server.close()
    })

    test('Devolver la lista descendente IMDB', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesA .getMoviesByClassifier('imdb', 'desc'))

        
    })
})

/*
describe('GET /api/movies/rating/:classifier/:order', () => {

    afterAll(() => {
        server.close()
    })

    test('Caso error', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/error')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ "message": "Error", "status": 500 })

        
    })
})
 */



