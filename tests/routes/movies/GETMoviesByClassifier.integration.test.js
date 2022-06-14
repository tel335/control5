import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesActions from '../../../src/actions/movies/movies'

describe('GET /api/movies/rating/classifier/order', () => {
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('devuelve la clasificacion y el orden ', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getClassifier1()) 
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getClassifier1())
    })

    test('devuelve la clasificacion y el orden ', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getClassifier2()) 
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getClassifier2())
    })

    test('devuelve la clasificacion y el orden ', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getOrder2()) 
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getOrder2())
    })

    test('devuelve la clasificacion y el orden ', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getOrder1()) 
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getOrder1())
    })
    
    test('devuelve error si no se conoce el orden', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getFAILMockMovies())
        const response = await request(app.callback()).get('/api/movies/rating/rotten/olo')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })

    test('devuelve la clasificacion y el orden ', async () => {
        sinon.stub(moviesActions, 'getMoviesByClassifier').returns(getFAILMockMovies()) 
        const response = await request(app.callback()).get('/api/movies/rating/rott/asc')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({"message": "Hubo un error al mostrar toda la lista", "status": 500})
    })
})

function getClassifier1() 
{
    return [{
        'class' : 'imdb',
        'order' : 'ascendente'
    }]
}

function getClassifier2() 
{
    return [{
        'class' : 'rotten',
        'order' : 'ascendente'
    }]
}

function getOrder1() 
{
    return [{
        'class' : 'imdb',
        'order' : 'descendente'
    }]
}
function getOrder2() 
{
    return [{
        'class' : 'rotten',
        'order' : 'descendente'
    }]
}
function getFAILMockMovies(){
    return undefined
}