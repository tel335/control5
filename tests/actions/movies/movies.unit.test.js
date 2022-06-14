import request from 'supertest'
import { server, app } from '../../../src/index'
import moviesData from '../../../src/dataset/movies.json'
import moviesActions from '../../../src/actions/movies/movies'

describe('Probando acciones de  movies', () => {
    afterAll(() => {
        server.close()
    })

    test('Obtener todas las peliculas', async () => {
        const response = await request(app.callback()).get('/api/movies')
        expect(response.body).toEqual(moviesData)
    })

    test('Filtrar peliculas por nombre', async () => {
        const response = await request(app.callback()).get('/api/movies/bat')
        const lenght = Object.keys(response.body).length
        expect(lenght).toBe(18)
    })

    test('Ordenar las peliculas de forma ascendente por clasificacion', async () => {
        const response = await request(app.callback()).get('/api/movies/rating/imdb/asc')
        const orderMovies = moviesActions.getMoviesByClassifier('imdb', 'asc')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(orderMovies)
    })

})