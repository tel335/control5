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

    test('Devolver todas las peliculas con el parametro de búsqueda de titulo', async () => {
        const response = await request(app.callback()).get('/api/movies/app')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesActions.getMoviesByName('app'))
    })

    test('Si no hay resultados, entonces comprobar mensaje "No se han encontrado coincidencias"', async () => {
        const response = await request(app.callback()).get('/api/movies/sopaipilla')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'No se han encontrado coincidencias' })
    })
})

//Tip para simular excepciones con sinon: 
//sinon.stub(‘myFile’, myFunction).throws(new Error(‘error’))
