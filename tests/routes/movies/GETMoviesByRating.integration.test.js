import sinon from 'sinon'
import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesActions from '../../../src/actions/movies/movies'
//import data from '../../../src/actions/dataset/movies'
const jsonMovies= require('../../../src/dataset/movies.json'); 


describe('GET /api/movies', () => {
    /**
     * beforeEach
     * afterEach
     * beforeAll
     * afterAll
     */
   beforeEach(() => {
        /**
         * Antes de cada prueba generamos un entorno con los
         * datos limpios
         */
        sinon.restore()
        
    })

    

    afterAll(() => {
        // Cerramos el servidor
        server.close()
    })

    test('IMDB en orden descendente', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('imdb','desc'))
    })

    test('IMDB en orden ascendente', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('imdb','asc'))
    })
    test('Rotten en orden descendente', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('rotten','desc'))
    })
    test('Rotten en orden ascendente', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByClassifier('rotten','asc'))
    })

    test('Error IMDB', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/aaa')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ message: 'Hubo un error al mostrar toda la lista' })
    })

    test('Error Rotten', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/aaa')
        expect(response.status).toBe(500)
        expect(response.body).toEqual({ message: 'Hubo un error al mostrar toda la lista' })
    })
})

//Tip para simular excepciones con sinon: 
//sinon.stub(‘myFile’, myFunction).throws(new Error(‘error’))
