import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import movieActions from '../../../src/actions/movies/movies'

const allMovies = require('../../../src/dataset/movies.json')
const array = Object.keys(allMovies).map(key => allMovies[key]);

describe('GET /api/movies', () => {
    /**
     * beforeEach
     * afterEach
     * beforeAll
     * afterAll
     */
    beforeEach(() => {
        sinon.restore()
    })

    afterAll(() => {
        server.close()
    })

    test('return de las peliculas ordenadas ascendentemente por imdb', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock3())
        const response = await request(app.callback()).get('/api/movies/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMock3())
    })

    test('return de las peliculas ordenadas ascendentemente por roten', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock4())
        const response = await request(app.callback()).get('/api/movies/rotten/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMock4())
    })

    test('return de las peliculas ordenadas descendentemente por imdb', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock5())
        const response = await request(app.callback()).get('/api/movies/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMock4())
    })

    test('return de las peliculas ordenadas ascendentemente por roten', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock6())
        const response = await request(app.callback()).get('/api/movies/rotten/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(getMock4())
    })

    test('return error si no se pasa asc o desc en rotten', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock4())
        const response = await request(app.callback()).get('/api/movies/rotten/jfjdhjd')
        expect(response.status).toBe(404)
        expect(response.body).toEqual({})
    })

    test('return error si no se pasa asc o desc en imdb', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock3())
        const response = await request(app.callback()).get('/api/movies/imdb/jksakjsakj')
        expect(response.status).toBe(404)
        expect(response.body).toEqual({})
    })

    test('return error si no se pasa un classifier valido', async () => {
        
        sinon.stub(movieActions, 'getMoviesByClassifier').returns(getMock3())
        const response = await request(app.callback()).get('/api/movies/elCesar')
        expect(response.status).toBe(404)
        expect(response.body).toEqual({})
    })
})


function getMock3 () {
      
    return [
        allMovies.sort(function(a,b){
            return a.key("IMDB Rating") - b.key("IMDB Rating")
        })

    ]
}

function getMock4 () {
      
    return [
        allMovies.sort(function(a,b){
            return a.key("Rotten Tomatoes Rating") - b.key("Rotten Tomatoes Rating")
        })

    ]
}

function getMock5 () {
      
    return [
        allMovies.sort(function(a,b){
            return b.key("IMDB Rating") - a.key("IMDB Rating")
        })

    ]
}

function getMock6 () {
      
    return [
        allMovies.sort(function(a,b){
            return b.key("Rotten Tomatoes Rating") - a.key("Rotten Tomatoes Rating")
        })

    ]
}