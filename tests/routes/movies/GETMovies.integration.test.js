import request from 'supertest'
import { server, app } from '../../../src/index'
import sinon from 'sinon'
import moviesData from '../../../src/dataset/movies.json'
import moviesActions from '../../../src/actions/movies/movies'

describe('GET /api/movies', () => {
    afterAll(() => {
        server.close()
    })

    beforeEach(() => {
        sinon.restore()
    })

    test('Deberá devolver toda la lista de películas con status 200', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(moviesData)

    })

    test('Debera devolver mensaje con satus 500', async () => {
        sinon.stub(moviesActions, 'getAllMovies').returns()
        const response = await request(app.callback()).get('/api/movies')
        const mensaje = (response.body)['message']
        expect(mensaje).toEqual('Hubo un error al mostrar toda la lista')
        expect(response.status).toBe(500)
    })
})

describe('GET /api/movies/:name', () => {
    afterAll(() => {
        server.close()
    })
    beforeEach(() => {
        sinon.restore()
    })

    test('Ingresando nombre bat debe devolver 18 peliculas', async () => {
        const response = await request(app.callback()).get('/api/movies/bat')
        const lenght = Object.keys(response.body).length
        expect(response.status).toBe(200)
        expect(lenght).toBe(18)

    })
    test('Ingresando nombre app debe devolver 19 peliculas', async () => {
        const response = await request(app.callback()).get('/api/movies/app')
        const lenght = Object.keys(response.body).length
        expect(response.status).toBe(200)
        expect(lenght).toBe(19)

    })

    test('Debera devolver el mensaje "No se han encontrado coincidencias", con status 200', async () => {
        sinon.stub(moviesActions, 'getMoviesByName').returns()
        const response = await request(app.callback()).get('/api/movies/asdjklsaj')
        expect(response.status).toBe(200)
        const mensaje = (response.body)['message']
        expect(mensaje).toEqual('No se han encontrado coincidencias')

    })
})

describe('GET /api/movies/rating/:classifier/:order', () => {
    afterAll(() => {
        server.close()
    })

    test('Debera devolver todas las peliculas ordenadas de forma ascendente por clasificacion imdb', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        const orderMovies = moviesActions.getMoviesByClassifier('imdb', 'asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(orderMovies)
    })

    test('Debera devolver todas las peliculas ordenadas de forma descendente por clasificacion imdb', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/desc')
        const orderMovies = moviesActions.getMoviesByClassifier('imdb', 'desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(orderMovies)
    })

    test('Debera devolver todas las peliculas ordenadas de forma ascendente por clasificacion rotten', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/asc')
        const orderMovies = moviesActions.getMoviesByClassifier('rotten', 'asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(orderMovies)
    })

    test('Debera devolver todas las peliculas ordenadas de forma descendente por clasificacion rotten', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/desc')
        const orderMovies = moviesActions.getMoviesByClassifier('rotten', 'desc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(orderMovies)
    })

    test('Debera devovler mensaje con error 500 al poner un valor erroneo en el orden', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/rotten/:v')
        const mensaje = (response.body)['message']
        expect(mensaje).toEqual('Hubo un error al mostrar toda la lista')
        expect(response.status).toBe(500)
    })

    test('Debera devovler mensaje con error 500 al poner un valor erroneo en el orden', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/:v')
        const mensaje = (response.body)['message']
        expect(mensaje).toEqual('Hubo un error al mostrar toda la lista')
        expect(response.status).toBe(500)
    })

    test('Debera devovler mensaje con error 500 al poner un valor erroneo en la clasificacion', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/:v/asc')
        const mensaje = (response.body)['message']
        expect(mensaje).toEqual('Hubo un error al mostrar toda la lista')
        expect(response.status).toBe(500)
    })

    test('Debera devovler mensaje con error 500 al poner un valor erroneo en la clasificacion', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/:v/desc')
        const mensaje = (response.body)['message']
        expect(mensaje).toEqual('Hubo un error al mostrar toda la lista')
        expect(response.status).toBe(500)
    })
})

describe('GET ?limit=10', () => {
    test('/api/movies?limit=10', () => {

    })

})