import { message } from 'koa/lib/response'
import request from 'supertest'
import { Test } from 'supertest'
import { server, app } from '../../../src/index'
import GetMovies from '../../../src/actions/movies/movies'
import sinon from 'sinon'


describe('GET /api/movies/rating/:classifier/:order', () => {
    afterAll(() => {
        server.close()
    })

    beforeEach( () => {
        sinon.restore()
    })

    test('Deberá devolver todas las películas ordenadas según classifier y order, con status 200. Classifier solamente puede tomar 2 valores: imdb o rotten (Ordenar según el ranking IMDB, o el ranking Rotten Tomatoes). Order solo puede tomar 2 valores: asc o desc (Ordena de forma ascendente o descendente, según el número dado por el ranking seleccionado, si es imdb o rotten).', async () => {
        sinon.stub(GetMovies, 'getMoviesByClassifier').returns(params())
        const response = await request(app.callback()).get('/api/movies/rating/imbd/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(params())
    })

    test('En caso de que venga cualquier otro valor, devolver mensaje de error con status 500', async () => {
        sinon.stub(GetMovies, 'getMoviesByClassifier').returns(paramserror())
        const response = await request(app.callback()).get('/api/movies/rating/:classifier/:order')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ message: 'Error' })
    })
})

function params() {
    return [
        {
            classifier: 'imbd',
            
            order: 'desc'
        }
    ]
}

function paramserror() {
    return [
        {
            classifier: 'lol',
            order: 'xd'
        }
    ]
}